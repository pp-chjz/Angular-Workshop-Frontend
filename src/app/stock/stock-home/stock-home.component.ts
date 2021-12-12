import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColums= ['image','name','price','stock','action']

  dataSource = new MatTableDataSource<Product>();

  constructor() { }

  ngOnInit(): void { //ทำงานเมื่อสร้างขึ้นมา
    this.feedData();
  }

  feedData(){
    const dummy: Product[] = [
      {
        name:"Non nemo officiis atque ratione.", //press F1 and choose faker
        stock: 1,
        price: 2000,
        image: "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
  
      },
      {
        name:"Voluptate iusto et et quis laboriosam odit nulla sint veniam fd",
        stock: 222222222,
        price: 2000,
        image: "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
  
      },
      {
        name:"Aut facere placeat recusandae omnis.",
        stock: 3542524,
        price: 2000,
        image: "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
  
      },
      {
        name:"Dolores voluptas qui aliquid aliquid dicta inventore quis incidunt a.",
        stock: 441253,
        price: 2000,
        image: "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
  
      },
      {
        name:"Officia voluptas ipsam dolores voluptate voluptate molestiae.",
        stock: 5,
        price: 2000,
        image: "https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
  
      },
      
    ]
    this.dataSource.data = dummy
  }

}
