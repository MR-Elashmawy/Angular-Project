import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { RegisterdService } from './../services/registerd.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerd',
  templateUrl: './registerd.component.html',
  styleUrls: ['./registerd.component.css']
})
export class RegisterdComponent implements OnInit {
  registerForm: FormGroup | any;
  userImage: any;
  imgExtensionInvalid = false;
  userHasImage = false;
  errorMsg = "";
  successMsg = "";
  passwordError = "";
  newUser = { id:"", first_name: "", last_name: "", email: "", password: "", gender: "", image: "" };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private registerService: RegisterdService,
    private router: Router,
    private titlePage: Title) {
      titlePage.setTitle("Register");
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      gender: new FormControl('', [Validators.required])
    })

  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  passwordMatching() {
    if (this.password.value !== this.confirmPassword.value) {
      return false;
    }
    return true;
  } // check if passowrd and confirm password matching

  fileSelected(event: any) {
    this.userImage = event.target.files[0];
    if (this.userImage.type !== "image/jpg" && this.userImage.type !== "image/jpeg" && this.userImage.type !== "image/png") {
      this.userHasImage = true;
      this.imgExtensionInvalid = true;
      return this.errorMsg = "Image extension must be (jpg, png)";
    } else {
      this.userHasImage = true;
      this.imgExtensionInvalid = false;
      return this.userImage = this.userImage.name;
    } // user uploaded image

  } // check if user upload image with valid extension or not

  register() {

    if (this.registerForm.invalid) { // invalid form data
      this.registerForm.markAllAsTouched();
    } else {

      if (!this.passwordMatching()) {
        this.passwordError = "Password and confirm password doesn't match";
        return this.registerForm.invalid;
      } // password and confirm password doesn't match

      if (this.userHasImage && this.imgExtensionInvalid) {
        return this.registerForm.invalid;
      } // user upload invalid image

      if (this.userHasImage) {
        this.userImage; // image name

      } // user upload valid image

      if (!this.userHasImage) {
        this.userImage = 'default.png';
      } // user doesn't upload image



        this.newUser.id = this.email.value,
        this.newUser.first_name = this.firstName.value,
        this.newUser.last_name = this.lastName.value,
        this.newUser.password = this.password.value,
        this.newUser.email = this.email.value,
        this.newUser.gender = this.gender.value,
        this.newUser.image = this.userImage;

      this.registerService.addNewUser(this.newUser).subscribe();
      this.successMsg = "We Are Happy To Join US";
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500); //redirct to login page
      this.registerForm.reset();
    }
  }
}
