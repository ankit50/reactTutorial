import { useState } from "react";
function App() {
  return (
    <>
      <h1>Hellow World</h1>
    </>
  )
}
function Profile() {
  let [age, setAge] = useState(20);
  const IncreaseAge = () => {
    setAge(age+1);
  }
  const decreaseAge = () => {
    if(age>0){
      setAge(age-1);
    }
  }
  return (
    <>
      <h2>Ankit Kharel</h2>
      <h2>Age:{age}</h2>
      <button onClick={IncreaseAge}>Increase</button>
      <button onClick={decreaseAge}>Decrease</button>
    </>
  )
}


export { App, Profile }
