import { useState, useCallback } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [charFlag, setCharFlag] = useState(false);
  const [numberFlag, setNumberFlag] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberFlag) {
      str += "0123456789";
    }
    if (charFlag) {
      str += "@#?{}$%^~";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, charFlag, numberFlag, setPassword]);

  return (
    <>
      <h1 className="mt-2 text-center text-2xl font-medium ">Password Generator</h1>
      <div class="bg-slate-800 p-4 rounded-lg max-w-lg mx-auto">
        <div class="flex items-center justify-between mb-4">
          <input
            class="bg-white text-xl py-2 px-4 rounded-lg w-full mr-4"
            type="text"
            readOnly
            placeholder={password}
          />
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">copy</button>
        </div>

        <div class="flex items-center space-x-4 text-orange-400">
          <div class="flex items-center">
            <label for="length" class="mr-2">Length</label>
            <input type="range" id="length" min={8} max={20} value={length} class="w-32" onChange={(e) => { setLength(e.target.value) }} />
            <span id="lengthValue">{length}</span>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="numbers" />
            <label for="numbers" class="ml-2">Numbers</label>
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="characters" />
            <label for="characters" class="ml-2">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
