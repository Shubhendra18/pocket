import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  email: string;

  constructor(public authService: AuthService, private router: Router) { }
 
  public resetPassword = new FormGroup({
    email: new FormControl('',  Validators.required),
  });  
  resetPwd(email) {
    this.authService.resetPassword(email)
  }
 
  ngOnInit() {
  }

}
