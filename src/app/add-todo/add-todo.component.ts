import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<string> = new EventEmitter<string>();
  ID() {
    // Random Id generator
    return '_' + (Math.random()*Math.random()).toString(36).substr(2, 9);
  };
  constructor() { }

  ngOnInit(): void {
  }
  todo:string;
  addTodo(){
    if(this.todo){
      if(localStorage.getItem('Todos')){
        let todos:any = localStorage.getItem('Todos');
        todos = JSON.parse(todos);
        todos.push({todo: this.todo, active:false, _id:this.ID()});
        localStorage.setItem('Todos',JSON.stringify(todos));
      }else{
        localStorage.setItem('Todos',JSON.stringify([{todo:this.todo, active:false, _id:this.ID()}]));
      }
      this.onAddTodo.emit('evento');
    }
  }
}
