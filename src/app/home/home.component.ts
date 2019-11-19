import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PocketflashserviceService } from '../pocketflashservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private q: PocketflashserviceService) { }

  logout() {
    this.authService.logOut();
  }

  ngOnInit() {
  }
  
  addContact(cd) {
    this.q.ContactSend(cd.value);
  }
}
