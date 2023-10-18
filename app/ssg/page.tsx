import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

const getTodoList = async () => {
  const response = await fetch(`http://localhost:3000/api/todos`, {});
  const result = await response.json();
  return result;
};

async function SSG() {
  const { message, todos = [] } = await getTodoList();

  return (
    <section className="py-20 w-full text-center">
      <div className="container">
        <h1 className="text-3xl font-bold mb-10 bg-emerald-100 px-2 text-emerald-800">
          SSG — Static
        </h1>
        <TodoForm />
        <h2 className="text-xl font-semibold mt-10 border-b pb-2">Todos</h2>
        <TodoList todoList={todos} />
      </div>
    </section>
  );
}

export default SSG;
