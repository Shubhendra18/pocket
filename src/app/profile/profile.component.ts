import { Component, OnInit } from '@angular/core';
import { PocketflashserviceService } from '../pocketflashservice.service';
import { Profile } from '../Model/category';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  public prof: Profile[];

  constructor(private q: PocketflashserviceService) {
    this.q.GetSuggestionData().subscribe(profiledata => {
      this.prof = profiledata;
    });
  }

ngOnInit() {
}
addprofile(xyz) {
  this.q.AddProfile(xyz.value);
}

}
