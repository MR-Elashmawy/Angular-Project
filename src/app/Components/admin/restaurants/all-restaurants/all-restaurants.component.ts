import { RestaurantsService } from './../../../../Services/admin/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {
  constructor(private resto:RestaurantsService) { }
  collection:any=[];
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.log(result);
      this.collection = result;
    });
  }
  deleteResto(item: number){
    this.collection.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result)=>{
    });
    
  }

}
