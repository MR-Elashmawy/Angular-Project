import { OrdersService } from './../../../../Services/admin/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-rejected',
  templateUrl: './orders-rejected.component.html',
  styleUrls: ['./orders-rejected.component.css']
})
export class OrdersRejectedComponent implements OnInit {

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
