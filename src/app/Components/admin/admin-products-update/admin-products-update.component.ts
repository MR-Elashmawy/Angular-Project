import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminProductsService } from 'src/app/Services/admin-products.service';

@Component({
  selector: 'app-admin-products-update',
  templateUrl: './admin-products-update.component.html',
  styleUrls: ['./admin-products-update.component.css']
})

export class AdminProductsUpdateComponent implements OnInit {
  id:any;
  product:any;
  base64:any='';
  form!:FormGroup;
  constructor(private myActivated: ActivatedRoute, public myService: AdminProductsService,private build:FormBuilder) {
    this.id = myActivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myService.getProductByID(this.id).subscribe(
      (data)=>{
        this.product= data;
      }
      );
      this.form=this.build.group({
        title: ['',Validators.required],
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
  updateProduct(item:any){
    this.form.get('tiitle')?.setValue(item.tiitle);
    this.form.get('price')?.setValue(item.price);
    this.form.get('description')?.setValue(item.description);
    this.form.get('image')?.setValue(item.image);
    this.base64=item.image;
  }
}
