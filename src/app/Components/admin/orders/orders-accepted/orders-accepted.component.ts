import { OrdersService } from './../../../../Services/admin/orders.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-accepted',
  templateUrl: './orders-accepted.component.html',
  styleUrls: ['./orders-accepted.component.css']
})
export class OrdersAcceptedComponent implements OnInit {

 
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