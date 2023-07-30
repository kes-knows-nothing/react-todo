import { useState } from "react";

function ToDoList2() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 기본적인 것을 잊고 있었다. 새로고침을 없애고 form을 이용해서 엔터고칠수 있다. 
    setTodoList((prev) => [...prev, todo]);
    setTodo("");
  };

  const handleDelete = (index: number) => {
    setTodoList((prevState) => prevState.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <h1>To do App</h1>
      <form action="" onClick={handleSubmit}>
        <input type="text" onChange={handleInput} value={todo} />
        <button>Add</button>

        <ul>
          {todoList.map((todo, index) => (
            <>
              <li key={index}>{todo}</li>
              <button onClick={() => handleDelete(index)}>❌Delete</button>
            </>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default ToDoList2;
