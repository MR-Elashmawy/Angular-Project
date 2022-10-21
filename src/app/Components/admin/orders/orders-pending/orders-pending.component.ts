import { OrdersService } from './../../../../Services/admin/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-pending',
  templateUrl: './orders-pending.component.html',
  styleUrls: ['./orders-pending.component.css']
})
export class OrdersPendingComponent implements OnInit {

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
