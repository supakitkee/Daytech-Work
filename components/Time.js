import React, { useState, useEffect } from "react";
import Card from "../components/Card"

export default function Timer() {

   const [time, setTime] = useState(0);
   const [timerOn, setTimeOn] = useState (false);
   let num = "text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"; 
   useEffect(() => {
     let interval = null;
     if (timerOn) {
       interval = setInterval(() => {
         setTime(prevTime => prevTime + 10)
       }, 10)
     }
     else {
       clearInterval(interval)
     }
     return () => clearInterval(interval);
   }, [timerOn] )

   return (
    <div className="md:break-inside pb-4">
      <Card>
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
          <div className="text-center space-x-1">
            <div className="flex items-center justify-center mt-4 mb-6">
              <div className="text-6xl mx-7"> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)} </div>
              </div>
                {!timerOn && (
                  <button className = {num} onClick={() => setTimeOn(true)}>Start</button>
                )}
                {timerOn && (
                  <button className = {num} onClick={() => setTimeOn(false)}> Pause </button>
                )}
                {!timerOn && time == 0 && (
                  <button className=" text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300" onClick={() => { setTime(0); setTimeOn(false) }}> Reset </button>
                )}
                {timerOn && (
                  <button className = {num} onClick={() => { setTime(0); setTimeOn(false) }}> Reset </button>
                )}
                {!timerOn && time > 0 && (
                  <button className = {num} onClick={() => { setTime(0); setTimeOn(false) }}> Reset </button>
                )}
              </div>
        </Card>
    </div>
   )
}