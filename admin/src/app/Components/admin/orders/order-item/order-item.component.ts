import { OrdersService } from './../../../../Services/admin/orders.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  id:any;  
  order:any;
  successMsg = "";
  orderDateTime:any;


  allStatus = ['Pending', 'Accepted', 'Rejected']; // order status options

  constructor(private myActivated: ActivatedRoute, private orderService: OrdersService) { 
    this.id = myActivated.snapshot.params['id'];  // get order id from url
      
  }

  ngOnInit(): void {
    this.orderService.getSpecificOrder(this.id).subscribe(
      (data)=>{      
        this.order = data;
        this.orderDateTime = this.order.updated_at = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
      }
      );
  }

  updateOrder(name:any, date:any, price:any, details:any, status:any){
    let updatedOrder = {
      user_id:name.value,
      date:date.value,
      total_price:price.value,
      details:details.value,
      status:status.value
    }
      
    this.orderService.updateOrder(this.id, updatedOrder).subscribe();
    this.successMsg = "Order updated successfully";

    setTimeout(() => {
          this.successMsg = "";
    }, 2000); //hide msg
  }
}
