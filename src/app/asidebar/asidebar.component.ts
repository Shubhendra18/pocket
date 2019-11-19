import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.css']
})
export class AsidebarComponent implements OnInit {

  constructor(public authService: AuthService) { }
  logout(){ 
    this.authService.logOut2();
  }

  ngOnInit() {
  }

}
