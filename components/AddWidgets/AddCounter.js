import React, { useState } from "react";
import Button from "../Buttons/Button";

export default function AddCounter({
  setCounter,
  handleCancel,
  setListAllWidgets,
  listAllWidgets,
  realTime,
  handleAddWidgets
}) {
  const [checkError, setCheckError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (Number(e.target.title.value) < 0) {
      setCheckError("Please enter at least 0.");
    } else {
      setCounter(Number(e.target.title.value));
      handleCancel();

      let id;
      if (listAllWidgets.length == 0) {
        id = 1;
      } else {
        const lastArray = listAllWidgets.slice(-1).pop();
        id = lastArray.id + 1;
      }
      const data = {
        value: Number(e.target.title.value),
        id: id,
        date: realTime,
        type: "counter"
      };
      setListAllWidgets([...listAllWidgets, data]);
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-2">Add Counter</h2>
      <form onSubmit={onSubmit} className="flex">
        <div className="flex-1 mr-1">
          <input
            type="number"
            name="title"
            pattern="[0-9]"
            placeholder="Enter the initial value"
            className="w-full px-2.5 py-1 focus:outline-none rounded-md"
          />
        </div>
        <Button>Add</Button>
      </form>

      <div className="text-red-600 text-xs mt-1">{checkError}</div>
    </div>
  );
}
