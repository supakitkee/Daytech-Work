import React, { useState } from "react";
import Card from "../components/Card"

export default function Counter() {

  const [count, setCount] = useState(0);
  
  let reset;
  let minus;

  if (count <= 0) {
    reset = <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300" onClick={() => setCount(0)}> Reset </button>
    minus = <button className="text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300" onClick={() => setCount(0)}> - </button>
  }
  else {
    reset = <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600" onClick={() => setCount(0)}> Reset </button>
    minus = <button className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500 " onClick={() => setCount(count - 1)}> - </button>
  }

  return (
    
    <div className="md:break-inside pb-4">
      <Card>
        <h2 className="text-lg font-bold text-gray-400 mb-1.5"> Counter </h2>
          <div className="text-center">
            <div className="flex items-center justify-center mt-4 mb-6">
              {minus}
                <div className="text-6xl mx-7">{count}</div>
                  <button className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500" onClick={() => setCount(count + 1)}> + </button>
                </div>
              {reset}
          </div>
      </Card>
    </div> 
  )
}