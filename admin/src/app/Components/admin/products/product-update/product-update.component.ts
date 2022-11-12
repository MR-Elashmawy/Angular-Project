import { ProductsService } from './../../../../Services/admin/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id:any;
  product:any;
  // base64:any='';
  form!:FormGroup;
  constructor(private myActivated: ActivatedRoute, public myService: ProductsService,private router: Router) {
    this.id = myActivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myService.getProductByID(this.id).subscribe(
      (data)=>{
        this.product= data;
        // this.base64=this.product.image;
      }
      );
  }
  // getImagePath(event:any){
  //   const file=event.target.files[0];
  //   const reader=new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload=()=>{
  //     this.base64=reader.result;
  //     this.form.get('image')?.setValue(this.base64);
  //   }
  // }
  updateProduct(title:any,price:any, details:any, type:any, category_id:any){
    let updatedProduct = {
      title:title.value,
      price:price.value,
      details:details.value,
      type:type.value,
      category_id:category_id.value,
      // image:this.base64
    }

    this.myService.updateProduct(this.id, updatedProduct).subscribe();
    alert("Product Updated successfully");
    setTimeout(() => {
      this.router.navigate(['/dashboard/products']);
    }, 1500);
  }

}
