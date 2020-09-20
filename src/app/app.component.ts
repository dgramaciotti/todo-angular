import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo';
  todos = JSON.parse(localStorage.getItem('Todos'));
  refresh(){
    this.todos = JSON.parse(localStorage.getItem('Todos'));
  }
  ngOnInit():void{
  }
}
