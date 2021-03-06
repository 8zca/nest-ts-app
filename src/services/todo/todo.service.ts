import { TodoDto } from '@/dtos/todo.dto';
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

  find(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, todo: TodoDto) {
    const i = this.todos.findIndex((todo) => todo.id === id);
    if (i < 0) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }

    if (todo.body) this.todos[i].body = todo.body;
    if (todo.status) this.todos[i].status = todo.status;
    return this.todos[i];
  }
}
