import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <div className="App" id="app">
        <h1>What's The plan for Today?</h1>
        <TodoList />
      </div>
      <div id="developerDiv">
        <p id="designedBy">Designed and Coded By</p>
        <p id="developer">Baraka Karuru</p>
      </div>
    </>
  );
}

export default App;
