import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../Model/category';
import { PocketflashserviceService } from '../pocketflashservice.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styles: []

}) 
export class SuggestionComponent implements OnInit {

  public allsuggestion: Suggestion[];

  constructor(private q: PocketflashserviceService) {
    this.q.GetSuggestionData().subscribe(suggestiondata => {
      this.allsuggestion = suggestiondata;
    });
  }
  ngOnInit() {
  }
  addSug(xy) {
    this.q.AddSuggestion(xy.value);
  }
}