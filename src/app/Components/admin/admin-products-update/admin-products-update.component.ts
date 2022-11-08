import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private myActivated: ActivatedRoute, public myService: AdminProductsService,private router: Router) {
    this.id = myActivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myService.getProductByID(this.id).subscribe(
      (data)=>{
        this.product= data;
        this.base64=this.product.image;
      }
      );
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
  updateProduct(title:any,price:any, description:any){
    let updatedProduct = {
      title:title.value,
      price:price.value,
      description:description.value,
      image:this.base64
    }

    this.myService.updateProduct(this.id, updatedProduct).subscribe();
    alert("Product Updated successfully");
    setTimeout(() => {
      this.router.navigate(['/products']);
    }, 1500);
  }
}
