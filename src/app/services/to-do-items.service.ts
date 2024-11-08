import { Injectable } from '@angular/core';
import {ToDoItem} from '../models/to-do-item.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemsService {

  constructor() { }

  toDoList: ToDoItem[] = [];

  addToDoItem(item: ToDoItem): void {
    this.toDoList.push(item);
  }

  removeToDoItem(index: number): void {
    this.toDoList.splice(index, 1);
  }

  setCompleted(index: number, isCompleted: boolean): void {
    this.toDoList[index].isCompleted = isCompleted;
  }
}
