import logo from './logo.svg';
import './App.css';
import TodoForm from "./Components/TodoForm";
import JsonData from "./info.json"
function App() {
  return (
      <div className="container">
        <TodoForm/>
      </div>
  );
}

export default App;
