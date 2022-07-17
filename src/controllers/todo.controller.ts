import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { TodoService, TodoStatusType } from '@/services/todo';
import { ValidationPipe } from '@/pipes/validation.pipe';
import * as Joi from 'joi';

const updateSchema = Joi.object({
  body: Joi.string(),
  status: Joi.any().valid('todo', 'inprogress', 'done'),
});

class TodoDto {
  body: string;
  status: TodoStatusType;
}

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body('body') body: string) {
    return this.todoService.create(body);
  }

  @Get()
  index() {
    return this.todoService.all();
  }

  @Get(':id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.find(id);
  }

  @Patch(':id')
  //  methodレベルでValidationPipeやるとParamも対象になってしまう
  // @UsePipes(new ValidationPipe(updateSchema))
  update(
    @Body(new ValidationPipe(updateSchema)) todo: TodoDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.todoService.update({ ...todo, id });
  }
}
