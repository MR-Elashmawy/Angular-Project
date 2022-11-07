import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private titlePage: Title) { 
    titlePage.setTitle("Cart");

  }
 
    

  ngOnInit(): void {
  }

}
