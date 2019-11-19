import { Component, OnInit } from '@angular/core';
import { PocketflashserviceService } from '../pocketflashservice.service';
import { Category, Profile } from '../Model/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public allflashcard: Category[];
  public prof: Profile[];


  constructor(private q: PocketflashserviceService) {
    this.q.GetProfileData().subscribe(profiledata => {
      this.prof = profiledata;
    });
   }
  

  ngOnInit() {
    this.q.GetData().subscribe(data => {
      this.allflashcard = data;
    })
  }

}
