"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const TodoForm = () => {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);

  const handleSendTodo = async (title: string) => {
    setIsFetching(true);
    try {
      const response = await fetch(`http://localhost:3000/api/todos`, {
        method: "POST",
        body: JSON.stringify({ title: title }),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title");

    if (!title) return;

    const todoResult = await handleSendTodo(title as string);
    if (todoResult.message == "Success") {
      form.reset();
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium mb-2">Create a New Todo</h2>
      <input
        type="text"
        name="title"
        className="border border-emerald-400 px-2 py-0.5 rounded"
      />
      <button
        type="submit"
        disabled={isFetching}
        className="ml-2 text-sm px-2 py-1 border border-emerald-400 rounded bg-emerald-400 text-white disabled:bg-opacity-50"
      >
        {isFetching ? "Loading..." : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
