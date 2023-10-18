import { TodoForm } from "../components/TodoForm";
function SSR() {
  return (
    <section className="py-20 w-full text-center">
      <div className="container">
        <h1 className="text-3xl font-bold mb-10 bg-emerald-100 px-2 text-emerald-800">
          SSR — Dynamic
        </h1>

        <TodoForm />

        <h2 className="text-xl font-semibold mt-10 border-b pb-2">Todos</h2>
        <ul className="mt-4 flex flex-col gap-1"></ul>
      </div>
    </section>
  );
}

export default SSR;
