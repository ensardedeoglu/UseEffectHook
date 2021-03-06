import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=2
  useEffect(() => {
    async function loadUser(){
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=2");
      const userAPI = await res.json();
      setToDos(userAPI)
    }
    loadUser()
  },[])
  
  
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
