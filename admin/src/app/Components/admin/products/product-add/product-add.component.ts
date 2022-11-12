import { Router } from '@angular/router';
import { ProductsService } from './../../../../Services/admin/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productImage: any;
  products: any;
  base64: any = '';
  form: FormGroup | any;
  constructor(private myService: ProductsService, private build: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      details: ['', Validators.required],
      type: ['', Validators.required],
      category_id: ['', Validators.required],
      // image: ['', Validators.required],

    })
  }
  // getImagePath(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     this.base64 = reader.result;
  //     this.form.get('image')?.setValue(this.base64);
  //   }
  // }

  addProduct() {
    const newProduct = this.form.value;
    this.myService.addNewProduct(newProduct).subscribe(res => {
      alert("Product added successfully");
    }, erro=> console.log(erro))
    setTimeout(() => {
      this.router.navigate(['/dashboard/products']);
    }, 1500);
  }

}
