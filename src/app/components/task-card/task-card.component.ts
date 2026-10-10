import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/board.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() onRemoveTask = new EventEmitter<string>();

  removeTask(): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.onRemoveTask.emit(this.task.id);
    }
  }
}
