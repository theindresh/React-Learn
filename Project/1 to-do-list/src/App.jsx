import "./App.css";
import AddToDoList from "./Components/AddToDoList";
import HeadingName from "./Components/HeadingName";
import AddTodoitem1 from "./Components/addTodoitem1";
function App() {
  return (
    <>
      <center className="gap-2 m-4 p-4">
        <HeadingName />
        <AddToDoList />
        <AddTodoitem1 />
      </center>
    </>
  );
}

export default App;
