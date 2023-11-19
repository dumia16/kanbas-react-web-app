import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE } from "../../constant";

function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  // const API = "http://localhost:4000/a5/todos";

  const [todos, setTodos] = useState([]);
  const postTodo = async () => {
    const response = await axios.post(`${API_BASE}/a5/todos`, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(`${API_BASE}/a5/todos`);
    setTodos(response.data);
  };
  const removeTodo = async (todo) => {
    const response = await axios.get(`${API_BASE}/a5/todos/${todo.id}/delete`);
    setTodos(response.data);
  };
  const [errorMessage, setErrorMessage] = useState("");

  const deleteTodo = async (todo) => {
    try {
      await axios.delete(`${API_BASE}/a5/todos/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      await axios.put(`${API_BASE}/a5/todos/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      // setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const createTodo = async () => {
    const response = await axios.get(`${API_BASE}/a5/todos/create`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API_BASE}/a5/todos/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${API_BASE}/a5/todos/${todo.id}/title/${todo.title}`
    );
    setTodos(response.data);
  };

  const updateDescription = async () => {
    const response = await axios.get(
      `${API_BASE}/a5/todos/${todo.id}/description/${todo.description}`
    );
    setTodos(response.data);
  };

  const updateCompleted = async () => {
    const response = await axios.get(
      `${API_BASE}/a5/todos/${todo.id}/completed/${todo.completed}`
    );
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Working with Arrays</h2>

      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        type="text"
      />
      <br />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
      />
      <br />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked.toString(),
            })
          }
          checked={todo.completed === "true"}
          type="checkbox"
        />
        Completed
      </label>
      <br />
      <button onClick={postTodo} className="btn btn-warning mb-2 w-100">
        Post Todo
      </button>
      <button onClick={updateTodo} className="btn btn-success mb-2 w-100">
        Update Todo
      </button>

      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>

      <button
        onClick={updateCompleted}
        className="btn btn-secondary mb-2 w-100"
      >
        Update Completed
      </button>
      <button
        onClick={updateDescription}
        className="btn btn-secondary mb-2 w-100"
      >
        Update Description
      </button>

      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end"
            >
              Remove
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>

            <input
              checked={todo.completed === "true"}
              type="checkbox"
              readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>

      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API_BASE}/a5/todos/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2"
      >
        Update Title to {todo.title}
      </a>

      <h3>Deleting from an Array</h3>
      <a
        href={`${API_BASE}/a5/todos/${todo.id}/delete`}
        className="btn btn-primary me-2"
      >
        Delete Todo with ID = {todo.id}
      </a>
      <h4>Retrieving Arrays</h4>
      <a href={`${API_BASE}/a5/todos`} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a
        href={`${API_BASE}/a5/todos/${todo.id}`}
        className="btn btn-primary me-2"
      >
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a
        href={`${API_BASE}/a5/todos?completed=true`}
        className="btn btn-primary me-2"
      >
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API_BASE}/a5/todos/create`} className="btn btn-primary me-2">
        Create Todo
      </a>
    </div>
  );
}
export default WorkingWithArrays;
