import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import AddJustShout from './AddWidgets/AddJustShout';
import React, { useState, useEffect } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import AddWeather from './AddWidgets/AddWeather';
import AddJustSay from './AddWidgets/AddJustSay';
import AddCounter from './AddWidgets/AddCounter';
import { IoTimerOutline } from 'react-icons/io5';
import thcovidAPI from '../pages/api/thcovidAPI';
import WidgetsCard from './Layouts/WidgetsCard';
import { Header } from './Layouts/Settings';
import ModalSetting from './ModalSetting';
import Button from './Buttons/Button';
import JustShout from './JustShout';
import Modal from './Layouts/Modal';
import Card from './Layouts/Card';
import JustSay from './JustSay';
import Counter from './Counter';
import Weather from './Weather';
import Timer from './Timer';
import Covid from './Covid';
import {
  RiAddCircleLine,
  RiIncreaseDecreaseLine,
  RiSettings3Line,
  RiVirusFill,
} from 'react-icons/ri';

export default function WidgetTools() {
  let ct = 'mx-auto text-4xl';
  let menuSty = 'w-1/3 pt-1.5 pl-1.5';
  let cardSty = 'md:flex md:flex-wrap md:-mr-4';
  let iconSty = 'inline-block text-xl relative -top-0.5';
  let settingsBtn =
    'text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600';
  let disabled = false;

  let d = new Date();
  let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  let hms = new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(d);
  const realTime = `Last updated on ${mo} ${da}, ${ye}, ${hms}`;

  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveJustShout, setModalActiveJustShout] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveWeather, setModalActiveWeather] = useState(false);
  const [modalActiveCovid, setModalActiveCovid] = useState(false);
  const [modalActiveSetting, setModalActiveSetting] = useState(false);

  const [listAllWidgets, setListAllWidgets] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [defaultValueShout, setDefaultValueShout] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [listAllWidgets]);

  const saveLocal = () => {
    localStorage.setItem("listAllWidgets", JSON.stringify(listAllWidgets));
    localStorage.setItem("defaultValueShout", JSON.stringify(defaultValueShout));
  };
  const getLocal = () => {
    if (localStorage.getItem("listAllWidgets") === null || localStorage.getItem("defaultValueShout") === null) {
      localStorage.setItem("listAllWidgets", JSON.stringify([]));
      localStorage.setItem("defaultValueShout", JSON.stringify([]));
    } else {
      let Local = JSON.parse(localStorage.getItem("listAllWidgets"));
      let LocalShout = JSON.parse(localStorage.getItem("defaultValueShout"));
      setListAllWidgets(Local);
      setDefaultValueShout(LocalShout);
    }
  };

  const handleClick = function () {
    setModalActiveMenu(true);
  };
  const handleJustSay = function () {
    setModalActiveJustSay(true);
    setModalActiveMenu(false);
  };
  const handleJustShout = function () {
    setModalActiveJustShout(true);
    setModalActiveMenu(false);
  };
  const handleCounter = function () {
    setModalActiveCounter(true);
    setModalActiveMenu(false);
  };
  const handleWeather = function () {
    setModalActiveWeather(true);
    setModalActiveMenu(false);
  };
  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustSay(false);
    setModalActiveJustShout(false);
    setModalActiveCounter(false);
    setModalActiveWeather(false);
    setModalActiveSetting(false);
  };

  const handleSetting = function () {
    setModalActiveSetting(true);
  };
  const handleClear = function () {
    setListAllWidgets([]);
    setModalActiveSetting(false);
    setDefaultValueShout('');
  };

  const onUpdateValue = (id, value) => {
    let newWidgets = [...listAllWidgets];
    newWidgets.map((widget) => {
      if (widget.id === id) widget.value = value;
    });

    setListAllWidgets(newWidgets);
  };

  const handleReset = () => {
    let newWidgets = [];
    listAllWidgets.map((list) => {
      if (selectedOption === '' && list.type === 'counter') {
        setSelectedOption('counter');
        list.value = 0;
      } else if (selectedOption === list.type) {
        list.value = 0;
      }
      newWidgets.push(list);
    });
    setListAllWidgets(newWidgets);
    setModalActiveSetting(false);
  };

  const handleDelete = function (list) {
    if (listAllWidgets.length > 0) {
      setListAllWidgets(
        listAllWidgets.filter((widget) => widget.id !== list.id)
      );
    }
    setDefaultValueShout('');
  };

  const onEdit = (newId, newValue) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.id === newId) {
        data.value = newValue;
      }

      newListAllWidgets.push(data);
    });

    setListAllWidgets(newListAllWidgets);
  };

  const handleCovid = async (e) => {
    e.preventDefault();
    // Call API
    try {
      const res = await thcovidAPI.get('/api/open/today', {});

      const { data } = res;

      handleAdd('covid1', data);
    } catch {
      handleAdd('covid2', 'error'); 
    }
  };

  const onEditJustShout = (newValue) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.type === 'justShout') {
        data.value = newValue;
        setDefaultValueShout(newValue);
      }

      newListAllWidgets.push(data);
    });

    setListAllWidgets(newListAllWidgets);
    setModalActiveSetting(false);
  };

  const handleAdd = function (type, value) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const data = {
      id,
      date: realTime,
      type,
      value,
    };
    if (type === 'justShout') {
      setDefaultValueShout(value);
      listAllWidgets.map((widget) => {
        if (widget.type === 'justShout') {
          widget.value = value;
        }
      });
    }
    setListAllWidgets([...listAllWidgets, data]);
    handleCancel();
  };

  const onFix = (newId, newType, newName) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.id === newId) {
        data.value = newName;
        data.type = newType;
      }

      newListAllWidgets.push(data);
    });

    setListAllWidgets(newListAllWidgets);
  };

  const addWidgetPanal = () => {
    if (listAllWidgets.length > 0) {
      return listAllWidgets.map((list) => {
        if (list.type === 'justSay') {
          return (
            <JustSay
              key={list.id}
              list={list}
              onDelete={handleDelete}
              onEdit={onEdit}
            />
          );
        } else if (list.type === 'justShout') {
          return (
            <JustShout
              key={list.id}
              list={list}
              onDelete={handleDelete}
              onEditJustShout={onEditJustShout}
            />
          );
        } else if (list.type === 'counter') {
          return (
            <Counter
              key={list.id}
              list={list}
              onDelete={handleDelete}
              onUpdateValue={onUpdateValue}
            />
          );
        } else if (list.type === 'timer') {
          return (
            <Timer
              key={list.id}
              list={list}
              onDelete={handleDelete}
              onUpdateValue={onUpdateValue}
            />
          );
        } else if (list.type === 'weather' || list.type === 'weatherNF') {
          return (
            <Weather
              key={list.id}
              list={list}
              onDelete={handleDelete}
              onFix={onFix}
            />
          );
        } else if (list.type === 'covid1' || list.type === 'covid2') {
          return <Covid key={list.id} list={list} onDelete={handleDelete} />;
        }
      });
    } else {
      return (
        <>
          <Card>
            <div className='text-center text-gray-400 my-8 font-light'>
              <p className='text-4xl mb-2'>No widgets at all</p>
              <p>
                Click{' '}
                <button
                  onClick={handleClick}
                  className='font-normal text-blue-400 focus:outline-none'
                >
                  HERE{' '}
                </button>{' '}
                to add a new one
              </p>
            </div>
          </Card>
        </>
      );
    }
  };

  return (
    <>
      <h2 className='text-xl undefined'>Widgets</h2>
      <div className='pt-3'>
        <div className='mb-4 space-x-1'>
          <Button doClick={() => handleClick()} disabled={disabled}>
            <RiAddCircleLine className={iconSty} /> Add Widget
          </Button>
          <Button
            doClick={handleSetting}
            checkColor='darkGray'
            disabled={!disabled}
          >
            <RiSettings3Line className={iconSty} /> Settings
          </Button>
        </div>

        <div className={cardSty}>{addWidgetPanal()}</div>

        {modalActiveMenu && (
          <Modal onCancel={handleCancel}>
            <h2 className='text-xl undefined'>Add widget</h2>
            <div className='flex flex-wrap text-center mt-1.5 -ml-1.5'>
              <div onClick={handleJustSay} className={menuSty}>
                <WidgetsCard title='JustSay'>
                  <AiOutlineMessage className={ct} />
                </WidgetsCard>
              </div>
              <div onClick={handleJustShout} className={menuSty}>
                <WidgetsCard title='JustShout'>
                  <HiOutlineSpeakerphone className={ct} />
                </WidgetsCard>
              </div>
              <div onClick={handleCounter} className={menuSty}>
                <WidgetsCard title='Counter'>
                  <RiIncreaseDecreaseLine className={ct} />
                </WidgetsCard>
              </div>
              <div
                onClick={() => {
                  handleAdd('timer', 0);
                }}
                className={menuSty}
              >
                <WidgetsCard title='Timer'>
                  <IoTimerOutline className={ct} />
                </WidgetsCard>
              </div>
              <div onClick={handleWeather} className={menuSty}>
                <WidgetsCard title='Weather'>
                  <TiWeatherPartlySunny className={ct} />
                </WidgetsCard>
              </div>
              <div onClick={handleCovid} className={menuSty}>
                <WidgetsCard title='TH Covid'>
                  <RiVirusFill className={ct} />
                </WidgetsCard>
              </div>
            </div>
          </Modal>
        )}

        {modalActiveJustSay && (
          <Modal onCancel={handleCancel}>
            <AddJustSay onAdd={handleAdd} />
          </Modal>
        )}
        {modalActiveJustShout && (
          <Modal onCancel={handleCancel}>
            <AddJustShout
              onAdd={handleAdd}
              defaultValueShout={defaultValueShout}
            />
          </Modal>
        )}
        {modalActiveCounter && (
          <Modal onCancel={handleCancel}>
            <AddCounter onAdd={handleAdd} />
          </Modal>
        )}
        {modalActiveWeather && (
          <Modal onCancel={handleCancel}>
            <AddWeather onAdd={handleAdd} />
          </Modal>
        )}
        {modalActiveSetting && (
          <Modal onCancel={handleCancel}>
            <ModalSetting
              listAllWidgets={listAllWidgets}
              defaultValueShout={defaultValueShout}
              onEditJustShout={onEditJustShout}
              handleClear={handleClear}
            >
              <Header title='Reset Zone'>
                <div className='flex items-center'>
                  <select
                    className='flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm'
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value='counter'>All counters</option>
                    <option value='timer'>All timers</option>
                  </select>
                  <button onClick={handleReset} className={settingsBtn}>
                    {' '}
                    Set zero
                  </button>
                </div>
              </Header>
            </ModalSetting>
          </Modal>
        )}
      </div>
    </>
  );
}
