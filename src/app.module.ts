import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { TodoController } from '@/controllers/todo.controller';
import { AppService } from '@/services/app.service';
import { TodoService } from '@/services/todo';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
