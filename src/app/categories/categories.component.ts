import { Component, OnInit } from '@angular/core';
import { PocketflashserviceService } from '../pocketflashservice.service';
import { Category } from '../Model/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  public allcategory: Category[];
  catname: string;
  id: string;
  constructor(private q: PocketflashserviceService) { }

  ngOnInit() {
    this.q.GetData().subscribe(data => {
      this.allcategory = data;
    });
  }
  addCat(cd) {
    this.q.AddCatData(cd.value);
  }
  deleteCat(id) {
    console.log(id);
    this.q.DeleteData(id);
  }
  updatecat(k) {
    this.catname = k.Title;
    this.id = k.id;
  }
  editCat(cd) {
    this.q.UpdateCat(cd.value);
  }
}
 