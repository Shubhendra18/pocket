import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  public loginForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
   
  });  


  
  login(formData: FormData){
    this.authService.logIn(formData["email"], formData["password"]);
  }
  signin(formData: FormData){
    this.authService.signIn(formData["email"], formData["password"]);
  }
  


  ngOnInit() {
 
  }

}
