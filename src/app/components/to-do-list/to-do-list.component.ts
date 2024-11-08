import { Component } from '@angular/core';
import {ToDoItem} from '../../models/to-do-item.model';
import {NgForOf, NgIf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {AddItemComponent} from '../add-item/add-item.component';
import {take} from 'rxjs';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MatIcon,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  items: ToDoItem[] = [];
  constructor(private dialog: MatDialog,
              private liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit() {
    this.announceMessage('Welcome to your To-Do List!');
  }

  addItem() {
    this.dialog.open(AddItemComponent, {
      width: '80%',
      maxWidth: '500px',
      autoFocus: true,
      role: 'dialog',
      ariaLabel: 'Add new task',
    }).afterClosed()
      .pipe(take(1))
      .subscribe((result: ToDoItem) => {
      if (result) {
        this.items.push(result);
        this.announceMessage(`New task added: ${result.title}`);
      }
    });
  }

  toggleItemCompletion(index: number) {
    this.items[index].isCompleted = !this.items[index].isCompleted;
    const announcement = this.items[index].isCompleted ? `Task number ${index + 1} marked as completed` : `Task number ${index + 1} marked as not completed`;
    this.announceMessage(announcement);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
      this.announceMessage(`Task number ${index + 1} removed`);
  }

  announceMessage(message: string) {
    this.liveAnnouncer.announce(message, 'polite');
  }

}
