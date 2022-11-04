import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminProductsService } from 'src/app/Services/admin-products.service';

@Component({
  selector: 'app-admin-products-add',
  templateUrl: './admin-products-add.component.html',
  styleUrls: ['./admin-products-add.component.css']
})
export class AdminProductsAddComponent implements OnInit  {
  products :any;
  base64:any='';
  form!:FormGroup;
  constructor(private myService: AdminProductsService,private build:FormBuilder) { }
  ngOnInit(): void {
    this.form=this.build.group({
      title: ['', Validators.required],
      price: ['',Validators.required],
      description: ['',Validators.required],
      image: ['' ,Validators.required],

    })
  }
  getImagePath(event:any){
    const file=event.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.base64=reader.result;
      this.form.get('image')?.setValue(this.base64);
    }
  }
  addProduct(){
    const newProduct=this.form.value;
    this.myService.addNewProduct(newProduct).subscribe(res=>{
      alert("Product added successfully");
    })
  }
}
