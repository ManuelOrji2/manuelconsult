import { useState } from "react";


function App() {
  const [advice, setAdvice] = useState("Hello World!")
  const [count,setCount] = useState(0)

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount( ()=> count + 1)
    
  }

  return (
    <main className="bg-slate-50 h-screen w-screen flex flex-col justify-center items-center gap-3 font-mono">
      <h1 className="text-xl font-bold">ManuelConsult</h1>
      <div className="flex flex-col justify-center items-center gap-3 shadow-md p-5">
        <h2 className="text-lg">{advice}</h2>
        <button className="border-none
       px-2 py-0.5  rounded-md text-white bg-black text-md" onClick={getAdvice}>Get Advice</button>
       <Message count={count}/>
      </div>
    </main>
  );
}

function Message(prop){
  return(
    <p>You have read <strong>{prop.count}</strong> {prop.count > 1 ? "pieces" : "piece"} of advice</p>

  )
}

export default App;
