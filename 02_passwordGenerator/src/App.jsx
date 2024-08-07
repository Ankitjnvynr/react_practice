import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [isCharacter, setCharacter] = useState(false);
  const [isNumber, setNumber] = useState(false);
  const [password, setPassword] = useState("jdhdk");
 

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumber) str += "0123456789";
    if (isCharacter) str += "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isCharacter, isNumber]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharacter, isNumber, passwordGenerator]);

  return (
    <div className="bg-gray-900 h-screen text-white flex justify-center">
      <div className="bg-gray-800 h-28 my-5 w-[500px] p-5 rounded-2xl">
        <div className="bg-white rounded-full flex overflow-hidden">
          <input
            type="text"
            className="w-full text-gray-700 px-3"
            placeholder="hjjgjgj"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-green-800 px-3 py-1"
            onClick={copyPasswordToClipboard}
          >
            copy</button>
        </div>
        <div className="flex gap-5">
          <div className="mt-2 flex items-center gap-2 text-yellow-500">
            <input
              type="range"
              min="6"
              max="50"
              className="cursor-pointer"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length({length})</label>
          </div>
          <div className="mt-2 flex items-center gap-2 text-yellow-500">
            <input
              type="checkbox"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>
          <div className="mt-2 flex items-center gap-2 text-yellow-500">
            <input
              type="checkbox"
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
