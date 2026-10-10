import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task, Column, BoardState } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private readonly STORAGE_KEY = 'kanban-board-state';
  private boardState = new BehaviorSubject<BoardState>({ columns: [] });

  public board$: Observable<BoardState> = this.boardState.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  /**
   * Add a new column to the board
   */
  addColumn(title: string): void {
    if (!title || title.trim().length === 0) {
      console.warn('Column title cannot be empty');
      return;
    }

    const currentState = this.boardState.getValue();
    const newColumn: Column = {
      id: this.generateId(),
      title: title.trim(),
      tasks: []
    };

    currentState.columns.push(newColumn);
    this.updateState(currentState);
  }

  /**
   * Remove a column from the board
   */
  removeColumn(columnId: string): void {
    const currentState = this.boardState.getValue();
    currentState.columns = currentState.columns.filter(col => col.id !== columnId);
    this.updateState(currentState);
  }

  /**
   * Add a task to a specific column
   */
  addTask(columnId: string, title: string, description?: string): void {
    if (!title || title.trim().length === 0) {
      console.warn('Task title cannot be empty');
      return;
    }

    const currentState = this.boardState.getValue();
    const column = currentState.columns.find(col => col.id === columnId);

    if (!column) {
      console.warn(`Column with id ${columnId} not found`);
      return;
    }

    const newTask: Task = {
      id: this.generateId(),
      title: title.trim(),
      description: description?.trim(),
      columnId
    };

    column.tasks.push(newTask);
    this.updateState(currentState);
  }

  /**
   * Remove a task from the board
   */
  removeTask(taskId: string): void {
    const currentState = this.boardState.getValue();

    currentState.columns.forEach(column => {
      column.tasks = column.tasks.filter(task => task.id !== taskId);
    });

    this.updateState(currentState);
  }

  /**
   * Update a specific task
   */
  updateTask(taskId: string, updates: Partial<Task>): void {
    const currentState = this.boardState.getValue();

    for (const column of currentState.columns) {
      const task = column.tasks.find(t => t.id === taskId);
      if (task) {
        Object.assign(task, updates);
        break;
      }
    }

    this.updateState(currentState);
  }

  /**
   * Move a task to a different column
   */
  moveTask(taskId: string, targetColumnId: string): void {
    const currentState = this.boardState.getValue();
    let taskToMove: Task | null = null;

    // Find and remove task from current column
    for (const column of currentState.columns) {
      const index = column.tasks.findIndex(t => t.id === taskId);
      if (index !== -1) {
        taskToMove = column.tasks.splice(index, 1)[0];
        break;
      }
    }

    if (!taskToMove) {
      console.warn(`Task with id ${taskId} not found`);
      return;
    }

    // Add task to target column
    const targetColumn = currentState.columns.find(col => col.id === targetColumnId);
    if (targetColumn) {
      taskToMove.columnId = targetColumnId;
      targetColumn.tasks.push(taskToMove);
      this.updateState(currentState);
    }
  }

  /**
   * Load state from localStorage
   */
  private loadFromStorage(): void {
    try {
      const storedState = localStorage.getItem(this.STORAGE_KEY);
      if (storedState) {
        const state = JSON.parse(storedState) as BoardState;
        this.boardState.next(state);
      } else {
        this.initializeDefaultState();
      }
    } catch (error) {
      console.error('Error loading from storage:', error);
      this.initializeDefaultState();
    }
  }

  /**
   * Save state to localStorage
   */
  private saveToStorage(): void {
    try {
      const state = this.boardState.getValue();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Error saving to storage:', error);
    }
  }

  /**
   * Update state and persist to storage
   */
  private updateState(newState: BoardState): void {
    this.boardState.next(newState);
    this.saveToStorage();
  }

  /**
   * Initialize with default state (3 default columns)
   */
  private initializeDefaultState(): void {
    const defaultState: BoardState = {
      columns: [
        { id: this.generateId(), title: 'To Do', tasks: [] },
        { id: this.generateId(), title: 'In Progress', tasks: [] },
        { id: this.generateId(), title: 'Done', tasks: [] }
      ]
    };

    this.updateState(defaultState);
  }

  /**
   * Generate a unique ID
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
