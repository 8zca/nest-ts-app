export type TodoStatusType = 'todo' | 'inprogress' | 'done';
export type TodoType = {
  id: number;
  body: string;
  status: TodoStatusType;
};
