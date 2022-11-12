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
  orderDateTime:any;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
    (data)=>{            
      this.allOrders = data;
      this.orderDateTime = this.allOrders.updated_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

    },
    (error)=>{
      console.log(error);
    }
    );
  }

}