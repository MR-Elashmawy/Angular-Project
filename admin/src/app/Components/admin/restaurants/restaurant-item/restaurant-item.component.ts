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
  alert:boolean=false;
  editResto = new FormGroup({
    title : new FormControl(''),
    description : new FormControl(''),
    location : new FormControl(''),
    category_type : new FormControl(''),
    status : new FormControl('')
  })
  constructor(private router:ActivatedRoute,private resto:RestaurantsService) {
    //console.warn(this.router.snapshot.params['id']);
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.editResto = new FormGroup({
        title : new FormControl(result['title']),
        description : new FormControl(result['description']),
        location : new FormControl(result['location']),
        category_type : new FormControl(result['category_type']),
        status : new FormControl(result['status'])
      })
    })
   }
   collection(){
   // console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value).subscribe((result)=>{
      //console.warn(result);
    })
   }

   showSuccess(){
    this.alert=true;
   }

   closeAlert(){
    this.alert=false;
   }

  ngOnInit(): void {
    }
    }