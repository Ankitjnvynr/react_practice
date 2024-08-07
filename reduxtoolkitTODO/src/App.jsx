import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
  const updateTodo = () => {
    
  }
  return (
    <div className="max-w-[900px] mx-auto px-10 text-center">
      <h1 className="text-3xl font-semibold">Redux toolkit</h1>

      <AddTodo />
      <Todos />
    </div>
  );
}
