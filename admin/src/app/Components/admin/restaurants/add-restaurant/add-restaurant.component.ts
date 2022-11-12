import { RestaurantsService } from './../../../../Services/admin/restaurants.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean=false;
  addResto = new FormGroup({
    title : new FormControl(''),
    description : new FormControl(''),
    location : new FormControl(''),
    category_type : new FormControl(''),
    status : new FormControl(''),
  })
  constructor(private resto:RestaurantsService) { }

  ngOnInit(): void {
  }
  collectResto(){
  
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      //console.log("result is here",result);
      this.alert=true;
      this.addResto.reset({});
    })
  }
  closeAlert(){
    this.alert=false;
  }

}
