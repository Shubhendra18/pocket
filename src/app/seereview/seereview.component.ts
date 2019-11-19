import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../Model/category';
import { PocketflashserviceService } from '../pocketflashservice.service';

@Component({
  selector: 'app-seereview',
  templateUrl: './seereview.component.html',
  styles: []
})
export class SeereviewComponent implements OnInit {
  public allsuggestion: Suggestion[];

  constructor(private q: PocketflashserviceService) { }

  ngOnInit() {
    this.q.GetSuggestionData().subscribe(suggestiondata => {
      this.allsuggestion = suggestiondata;
    });
  }
}
