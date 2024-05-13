import { useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { useUserStore } from "./sotre/useUserStore";

function App() {
  const { fetch, user } = useUserStore();
  useEffect(() => {
    fetch(1);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList />
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </header>
    </div>
  );
}

export default App;
