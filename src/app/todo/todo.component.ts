import { Component, OnInit } from '@angular/core';
import { PocketflashserviceService } from '../pocketflashservice.service';
import { Todo } from '../Model/category';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  public alltodo: Todo[];
  Titles: string;
  Contents: string;
  constructor(private q: PocketflashserviceService) { }

  ngOnInit() {
    this.q.GetTodo().subscribe(Tododata => {
      this.alltodo = Tododata;
    });
  } 
  addTodo(at) {
    this.q.AddTodoData(at.value);
  }
  deletetodo(id) {
    console.log(id);
    this.q.DeleteTodo(id);
  }
}
