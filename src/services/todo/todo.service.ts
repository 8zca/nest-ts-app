import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TodoType } from './todo.type';

@Injectable()
export class TodoService {
  private readonly todos: TodoType[] = [];

  create(body: string) {
    const id = this.todos.length + 1;
    const entity: TodoType = { id, body, status: 'todo' };
    this.todos.push(entity);
    return entity;
  }

  all() {
    return this.todos;
  }

  unfinished() {
    this.todos.filter((todo) => todo.status !== 'done');
  }

  find(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(todo: TodoType) {
    const i = this.todos.findIndex((todo) => todo.id === todo.id);
    if (i < 0) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }

    this.todos[i].body = todo.body;
    this.todos[i].status = todo.status;
    return todo;
  }
}
