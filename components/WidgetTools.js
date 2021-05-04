import React, { useState } from "react";
import Modal from "../components/Modal";
import { RiAddCircleLine, RiIncreaseDecreaseLine } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";

import WidgetsCard from "./Layouts/WidgetsCard";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";

import { Card } from "./Layouts/Card";
import { Cards } from "./Layouts/Card";
import AddJustSay from "./AddWidgets/AddJustSay";
import AddCounter from "./AddWidgets/AddCounter";
import Settings from "./AddWidgets/Settings";
import JustSay from "./JustSay";
import Counter from "./Counter";
import Button from "./Buttons/Button";
import Timer from "./Timer";

export default function WidgetTools() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveSettings, setModalActiveSettings] = useState(false);


  const [justSay, setJustSay] = useState("");
  const [counter, setCounter] = useState("");
  const [timer, setTimer] = useState("");
  const [listAllWidgets, setListAllWidgets] = useState([]);
  const [zero, setZero] = useState("");
  const [totalTimer, setTotalTimer] = useState("");

  let check = false;

  const handleClick = function () {
    setModalActiveMenu(true);
  };
  const handleJustSay = function () {
    setModalActiveJustSay(true);
    setModalActiveMenu(false);
    setJustSay();
  };
  const handleCounter = function () {
    setModalActiveCounter(true);
    setModalActiveMenu(false);
    setCounter();
  };
  const handleTimer = function () {
    setModalActiveMenu(false);
    setTimer("");
    handleCancel();
    

    let id;
    if (listAllWidgets.length == 0) {
      id = 1;
    } else {
      const lastArray = listAllWidgets.slice(-1).pop();
      id = lastArray.id + 1;
    }
    const data = {
      value: "",
      id: id,
      date: realTime,
      type: "timer",
    };
    setListAllWidgets([...listAllWidgets, data]);
  };

  const mapNewData = (list, value) => {
  listAllWidgets.map((data) => {
      if (data.id === list.id) {
        // console.log(value) 
        return { ...data, value };
      } else {
        return data;
      }
    });

    // setListAllWidgets(mapData);
  let getTimer = listAllWidgets
    .filter((data) => data.type === 'timer')
    .map((data) => data.value);
  if (getTimer.length != 0) {
    getTimer = getTimer.reduce((prev, next) => prev + next);
    }
    
  const min = ("0" + Math.floor((getTimer / 60000) % 60)).slice(-2)
  const sec = ("0" + Math.floor((getTimer / 1000) % 60)).slice(-2)
  setTotalTimer(min+":"+sec)
  console.log(totalTimer,'totalTimer')
  };


  const handleSettings = function () {
    setModalActiveSettings(true);
   
  };
  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustSay(false);
    setModalActiveCounter(false);
    setModalActiveSettings(false);
  };


  let d = new Date();

  let ye = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let hms = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(d);

  const realTime = `Added on ${mo} ${da}, ${ye}, ${hms}`;

  let ct = "mx-auto text-4xl";
  let menuSty = "w-1/3 pt-1.5 pl-1.5";
  let cardSty = "md:flex md:flex-wrap md:-mr-4";
  let disabled = false;
  let iconSty = "inline-block text-xl relative -top-0.5";

  const handleClear = function () {
    setListAllWidgets([]);
    setModalActiveSettings(false);
  };
  
  // let clearBtn = (
  //   <Button doClick={handleClear} check={check} disabled={!disabled}>
  //     <RiSettings3Line className={iconSty} /> Settings
  //   </Button>
  // );

  // if (listAllWidgets.length > 0) {
  //   clearBtn = (
  //     <Button doClick={handleClear} check={!check} disabled={!disabled}>
  //       <BiBomb className={iconSty} /> Clear all
  //     </Button>
  //   );
  // }

  let checkja = check;
  const handleAddWidgets = function () {
    if (listAllWidgets.length > 0) {
      console.log(listAllWidgets);
      return listAllWidgets.map((list) => {
        if (list.type === "justSay") {
          return <JustSay onEdit={onEdit} key={list.id} title={justSay} list={list} onDelete={handleDelete}/>;
        } else if (list.type === "counter") {
          return <Counter zero={zero} setZero={setZero} key={list.id} title={counter} list={list} onDelete={handleDelete}/>;
        } else if (list.type === "timer") {
          return <Timer totalTime={totalTimer} setTotalTimer={setTotalTimer} zero={zero} setZero={setZero} key={list.id} title={timer} list={list} onDelete={handleDelete} mapNewData={mapNewData}/>;
        }
      });
    } else {
      return (
        <>
        <div className="md:inner md:w-1/2 pb-4 md:pr-4">
          <Cards title=" ">
            <div className="text-center text-gray-400 my-8 font-light">
              <p className="text-4xl mb-2">No widgets at all </p>
              <p>
                Click{" "}
                <button
                  onClick={handleClick}
                  className="font-normal text-blue-400 focus:outline-none"
                >
                  {" "}
                  HERE{" "}
                </button>{" "}
                to add a new one
              </p>
            </div>
          </Cards>
          </div>
        </>
      );
    }
  };

  // Update widgets state เป็นค่าใหม่
  const onEdit = function (newId, newValue){
    let newlistAllWidgets = [];
    listAllWidgets.map((data) => {
          if (data.id === newId) {
              data.value =  newValue; // คืน widget ที่ทำการอัปเดตค่าแล้ว
          }
      newlistAllWidgets.push(data);
    })
    setListAllWidgets(newlistAllWidgets);
  }

  const handleDelete = function (list) {
    if (listAllWidgets.length > 0) {
      setListAllWidgets(
        listAllWidgets.filter((widget) => widget.id !== list.id)
      );
    }
  };
  
  return (
    <>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4 space-x-1">
          <Button doClick={handleClick} disabled={disabled}>
            <RiAddCircleLine className={iconSty} /> Add Widget
          </Button>
          <Button doClick={handleSettings} checkColor="darkGray" disabled={!disabled}>
            <RiSettings3Line  className={iconSty} /> Settings
          </Button>
        </div>

        <div className={cardSty}>{handleAddWidgets()}</div>

        {modalActiveMenu && (
          <Modal onCancel={handleCancel}>
            <h2 className="text-xl undefined">Add widget</h2>
            <div className=" flex flex-wrap text-center mt-1.5 -ml-1.5">
              <div onClick={handleJustSay} className={menuSty}>
                <WidgetsCard title="JustSay">
                  <AiOutlineMessage className={ct} />
                </WidgetsCard>
              </div>
              <div onClick={handleCounter} className={menuSty}>
                <WidgetsCard title="Counter">
                  <RiIncreaseDecreaseLine className={ct} />
                </WidgetsCard>
              </div>
              <div onClick={handleTimer} className={menuSty}>
                <WidgetsCard title="Timer">
                  <IoTimerOutline className={ct} />
                </WidgetsCard>
              </div>
            </div>
          </Modal>
        )}

        {modalActiveJustSay && (
          <Modal onCancel={handleCancel}>
            <AddJustSay
              setJustSay={setJustSay}
              handleAddWidgets={handleAddWidgets}
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              realTime={realTime}
            />
          </Modal>
        )}

        {modalActiveCounter && (
          <Modal onCancel={handleCancel}>
            <AddCounter
              setCounter={setCounter}
              handleAddWidgets={handleAddWidgets}
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              realTime={realTime}
            />
          </Modal>
        )}

        {modalActiveSettings && (
          <Modal onCancel={handleCancel}>
            <Settings setZero={setZero} listAllWidgets={listAllWidgets} totalTimer={totalTimer}>
              <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">Delete Zone</h2>
                  <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1" onClick={handleClear}>
                    {" "}
                    Delete all widgets
                  </button>
              </div>
            </Settings>
          </Modal>
        )}
      </div>
    </>
  );
}