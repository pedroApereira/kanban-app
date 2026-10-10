import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './components/board/board.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { BoardService } from './services/board.service';
import { Task } from './models/board.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, BoardComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  board$ = this.boardService.board$;
  newColumnTitle = '';
  editingTask: Task | null = null;

  constructor(private boardService: BoardService) {}

  addColumn(): void {
    if (this.newColumnTitle.trim()) {
      this.boardService.addColumn(this.newColumnTitle);
      this.newColumnTitle = '';
    }
  }

  onEditTask(task: Task): void {
    this.editingTask = task;
  }

  onSaveTask(data: { title: string; description?: string }): void {
    if (this.editingTask) {
      this.boardService.updateTask(this.editingTask.id, {
        title: data.title,
        description: data.description
      });
      this.editingTask = null;
    }
  }

  onCancelEdit(): void {
    this.editingTask = null;
  }
}
