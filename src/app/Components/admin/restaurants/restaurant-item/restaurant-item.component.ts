import { RestaurantsService } from './../../../../Services/admin/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {
  id:any;
  restaurant:any;
  editResto = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    address : new FormControl(''),
  })
  constructor(private myActivated:ActivatedRoute,private resto:RestaurantsService) {
    this.id = myActivated.snapshot.params['id'];  // get order id from url
   }

  ngOnInit(): void {
    this.resto.getCurrentResto(this.id).subscribe(
      (data)=>{      
        this.restaurant = data;
      }
      );
    }
    }
