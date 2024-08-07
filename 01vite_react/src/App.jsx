import React, { useState } from "react";

const App = () => {
  let [color,setColor]=useState('red')
  return (
    <div
      className="w-100 h-screen bg-slate-400 flex justify-center duration-1000"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap gap-2 bg-white bottom-6 px-3 py-2 rounded-3xl shadow-lg">
        <button
          className="shadow-3xl rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}>
          Red
        </button>
        <button
          className="shadow-3xl rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}>
          Green
        </button>
        <button
          className="shadow-3xl rounded-full px-3 py-1 text-white"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}>
          Blue
        </button>
      </div>
    </div>
  );
};

export default App;
