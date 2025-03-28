import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [charFlag, setCharFlag] = useState(false);
  const [numberFlag, setNumberFlag] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberFlag) {
      str += "0123456789";
    }
    if (charFlag) {
      str += "@#?{}$%^";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, charFlag, numberFlag, setPassword]);
  
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=>{
    passwordGenerator();
  }, [length, charFlag, numberFlag, passwordGenerator]);

  return (
    <>
      <h1 className="mt-2 text-center text-2xl font-medium ">Dari Password Generator</h1>
      <div className="bg-slate-800 p-4 rounded-lg max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <input
            className="bg-white text-xl py-2 px-4 rounded-lg w-full mr-4"
            type="text"
            readOnly
            placeholder={password}
            ref={passwordRef}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
          onClick={copyPassword}
          >copy</button>
        </div>

        <div className="flex items-center space-x-4 text-orange-400">
          <div className="flex items-center">
            <label htmlFor="length" className="mr-2">Length</label>
            <input 
              type="range" id="length" min={8} max={20} value={length} className="w-32" onChange={(e) => { setLength(e.target.value) }} 
            />
            <span id="lengthValue">{length}</span>
          </div>
          <div className="flex items-center">
            <input 
            type="checkbox" id="numbers"
            defaultChecked={numberFlag} 
            onChange={() => { setNumberFlag((prev) => !prev)}} 
          />
          <label htmlFor="numbers" className="ml-2">Numbers</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="characters"
            defaultChecked={charFlag}
            onChange={()=>{setCharFlag((prev)=>!prev)}}/>
            <label htmlFor="characters" className="ml-2">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
