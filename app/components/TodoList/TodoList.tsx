import React from "react";
import { TodoItem as todoItem } from "@/types/todo";
import { TodoItem } from "../TodoItem";

type TodoListProps = { todoList: todoItem[] | [] };

function TodoList(props: TodoListProps) {
  const { todoList } = props;
  return (
    <ul className="mt-4 flex flex-col gap-1">
      {todoList.map((item: todoItem) => {
        return <TodoItem key={item.id} todo={{ ...item }} />;
      })}
    </ul>
  );
}

export default TodoList;
