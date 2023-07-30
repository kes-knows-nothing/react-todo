import { useState } from "react";

function ToDoList1() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    setTodoList((prev) => [...prev, todo]);
    setTodo("");
  };

  const handleDelete = (index: number) => {
    setTodoList((prevState) => prevState.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <h1>To do App</h1>
      <input type="text" onChange={handleInput} value={todo} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {todoList.map((todo, index) => (
          <>
            <li key={index}>{todo}</li>
            <button onClick={() => handleDelete(index)}>❌Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList1;