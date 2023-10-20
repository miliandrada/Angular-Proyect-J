import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { Description, Producto, ResponseProducto } from './Interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }

  getAllPromise():Promise<ResponseProducto>{
    return lastValueFrom(this.http.get<ResponseProducto>('https://api.mercadolibre.com/sites/MLA/search?q=ipod'))
    }
  create(payloand:any){
    return lastValueFrom(this.http.post('https://api.mercadolibre.com/sites/MLA/search?q=ipod',payloand))
  }
  update(payloand:any){
    return lastValueFrom(this.http.put('https://api.mercadolibre.com/sites/MLA/search?q=ipod',payloand))
  }
  delete(){
    return lastValueFrom(this.http.delete('https://api.mercadolibre.com/sites/MLA/search?q=ipod'))
  }

  getById(id:string):Promise<Producto>{
    return lastValueFrom(this.http.get<Producto>(`https://api.mercadolibre.com/items/${id}`))
 }

 getDescriptionById(id:string):Promise<Description>{
  return lastValueFrom(this.http.get<Description>(`https://api.mercadolibre.com/items/${id}/description`))
}
}