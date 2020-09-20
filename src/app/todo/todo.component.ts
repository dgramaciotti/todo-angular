import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Output() onDeleteTodo: EventEmitter<any> = new EventEmitter();
  @Output() onSaveTodo: EventEmitter<any> = new EventEmitter();
  @Output() onActiveChange: EventEmitter<any> = new EventEmitter();
  toggleEdit:boolean = false;
  textDecoration = '';

  editTodo(){
    this.toggleEdit ? this.toggleEdit = false : this.toggleEdit = true;
  }
  saveEditChange(){
    this.toggleEdit ? this.toggleEdit = false : this.toggleEdit = true;
    let todos = JSON.parse(localStorage.getItem('Todos'));
    todos.map((item)=>{
      if(item._id === this.todo._id){
        item.todo = this.todo.todo;
      }
    })
    localStorage.setItem('Todos',JSON.stringify(todos));
    this.onSaveTodo.emit('Modificado');
  }
  deleteTodo(){
    let todos = JSON.parse(localStorage.getItem('Todos'));
    todos = todos.filter((item)=>{
      return item._id !== this.todo._id;
    })
    localStorage.setItem('Todos',JSON.stringify(todos));
    this.onDeleteTodo.emit('Deletado');
  }
  activeChange(){
    this.todo.active ? this.textDecoration = 'line-through' : this.textDecoration = '';
    let todos = JSON.parse(localStorage.getItem('Todos'));
    todos.map((item)=>{
      if(item._id === this.todo._id){
        item.active = this.todo.active;
      }
    });
    localStorage.setItem('Todos',JSON.stringify(todos));
  }
  ngOnInit(): void {
    this.todo.active ? this.textDecoration = 'line-through' : this.textDecoration = '';
  }
}
