import { OrdersService } from './../../../../Services/admin/orders.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  allOrders:any;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
    (data)=>{            
      this.allOrders = data;      
    },
    (error)=>{
      console.log(error);
    }
    );
  }

}
