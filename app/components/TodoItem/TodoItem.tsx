import { TodoItem } from "@/types/todo";
type TodoItemProps = {
  todo: TodoItem;
};

function TodoItem(props: TodoItemProps) {
  const { todo } = props;
  return <li key={todo.id}>{todo.title}</li>;
}

export default TodoItem;
