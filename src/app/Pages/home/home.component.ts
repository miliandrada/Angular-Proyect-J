import { Component} from '@angular/core';
import { Producto, ResponseProducto } from 'src/app/Interfaces/Productos';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  productos: Producto []= []
  constructor(private productosService:ProductosService){
    this.productosService.getAllPromise()
    .then((response:ResponseProducto)=>{
      this.productos=response.results
      console.log(response.results)
    })
    .catch(e=>console.log(e))
}

eliminar(){
  console.log("Eliminar Home")
}

}




