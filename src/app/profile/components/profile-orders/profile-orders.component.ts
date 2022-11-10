import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.css']
})
export class ProfileOrdersComponent implements OnInit {

  allOrders:any;
  userID:any;
  deletedOrder:any=[];

  constructor(private titlePage: Title,private myActivated: ActivatedRoute, private profileService: ProfileService,private router: Router) {
    titlePage.setTitle("Orders");
    this.userID= myActivated.snapshot.params["id"];
    console.log(this.userID);

  }

  ngOnInit(): void {
    this.profileService.getAllOrders().subscribe(
    (data)=>{
      this.allOrders = data;
    },
    (error)=>{
      console.log(error);
    }
    );
  }
  deletePending(order:any){
    this.deletedOrder.splice(order-1,1)
    this.profileService.deletePending(order).subscribe((result)=>{
      alert("Order deleted successfully,Refresh The page");
    }); setTimeout(() => {
      this.router.navigate(['/orders']);
    },1000);
  }
}
