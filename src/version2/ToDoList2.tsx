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

  const handleDelete = (e: any) => {
    e.preventDefault();

    console.log({
      target: e.target,
      currentTarget: e.currentTarget,
    });
    console.log(e.target);
    const $li = e.target.closest("li");
    const id = parseInt($li.dataset.id, 10);
    console.dir({
      id,
    });

    setTodoList((prevState) => prevState.filter((todo, i) => i !== id));
  };

  return (
    <div>
      <h1>To do App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={todo} />
        <button>Add</button>

        <ul onClick={handleDelete}>
          {todoList.map((todo, index) => (
            <li key={index} data-id={index}>
              <p>{todo}</p>
              <button>❌Delete</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default ToDoList2;
