// nest g controller todo により todos 配下にコントローラーができる
import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  lists(): string[] {
    return ['todo1', 'todo2', 'todo'];
  }
}
