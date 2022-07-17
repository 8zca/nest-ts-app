import { TodoStatusType } from '@/services/todo/todo.type';

export class TodoDto {
  body?: string;
  status?: TodoStatusType;
}
