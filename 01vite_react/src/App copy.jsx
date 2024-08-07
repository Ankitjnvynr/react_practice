import { useState } from "react";
import Profile from "./components/Profile";


function App() {
  let [value, setValue] = useState(15);

  const addValue = () => {
    setValue(value + 1)
    console.log(value);
  }
  const removeValue = () => {
    setValue(value - 1)
    console.log(value);
  }
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander 2",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=85",
    },
    // More people...
  ];

  

  return (
    <>
      <button className="border borde"> add</button>
      <button onClick={addValue}>remove</button>
      <h1 onClick={removeValue}>Hello world</h1>
      <h1 className="text-3xl font-bold underline bg-slate-600 text-white border">
        {value}
      </h1>
      <Profile  people={people} />
    </>
  );
}

export default App;
