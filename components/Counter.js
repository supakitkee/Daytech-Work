import React, { useState } from "react";
import Card from "../components/Layouts/Card";
import Button from "../components/Buttons/Button";

export default function Counter({ title, list, index }) {

    const [count, setCount] = useState(list.value); 

    let countClass =
      "text-5xl rounded-full w-10 text-center focus:outline-none";
    let countBlue = "text-blue-500";

    let resetButton;
    let decrease;
    let disabled = true;

    const handleClick = () => {
      setCount(0);
    };

    if (count == 0) {
      resetButton = (
        <Button doClick={handleClick} disabled={disabled}>
          Set zero
        </Button>
      );
      decrease = <button className={`${countClass} text-gray-300`}>-</button>;
    } else {
      resetButton = (
        <Button doClick={handleClick} disabled={!disabled}>
          Set zero
        </Button>
      );
      decrease = (
        <button
          onClick={() => setCount(list.value - 1)}
          className={`${countClass} + ${countBlue}`}
        >
          -
        </button>
      );
    }
    list.value = count;
    return (
      <div class='md:inner md:w-1/2 pb-4 md:pr-4'>
      <Card title="Counter" key={index}>
        <div className="text-center">
          <div className="flex items-center justify-center mt-4 mb-6">
            {decrease}
            <div className="text-6xl mx-7">{count}</div>
            <button
              onClick={() => setCount(list.value + 1)}
              className={`${countClass} + ${countBlue}`}
            >
              +
            </button>
          </div>
          {resetButton}
          <div className="text-xs text-gray-400">
            <div className="mt-6 -mb-2 text-center">{list.date}</div>
          </div>
        </div>
      </Card>
      </div>
    );
  }

