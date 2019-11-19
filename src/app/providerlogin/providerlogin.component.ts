import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-providerlogin',
  templateUrl: './providerlogin.component.html',
  styleUrls: ['./providerlogin.component.css']
})
export class ProviderloginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  signin(formData: FormData){
    this.authService.signInWithProvider();
    
  }
}
