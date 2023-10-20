import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import Nav from "../../Nav";

function Assignment3() {
  console.log("Hello World!");
  return (
    <div>
      <Nav />
      <h1>Assignment 3</h1>
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
