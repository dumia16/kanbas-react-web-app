import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import Nav from "../../Nav";
import { useSelector } from "react-redux";

function Assignment3() {
  console.log("Hello World!");
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <Nav />
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <TodoList />
      <TodoItem />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <JavaScript />
      <DynamicStyling />
    </div>
  );
}
export default Assignment3;
