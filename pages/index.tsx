import React, { useState, useEffect } from 'react';
import DisplayWeather from '../components/DisplayWeather';
import Head from 'next/head';

export default function Home() {
  const [weather, setWeather] = useState<
    {
      id: number;
      name: string;
      weather: string;
      description: string;
      icon: string;
      date: string;
      temp: string;
    }[]
  >([]);
  const [form, setForm] = useState<{ country: string }>();

  const getJsonData = (req: {
    // data = card
    id: number;
    name: string;
    dt: number;
    timezone: number;
    data: {
      // weather = data
      name: string;
      weather: {
        // weather[0]
        main: string;
        description: string;
        icon: string;
      }[];
      main: {
        temp: number;
      };
    };
    date: string;
  }): {
    id: number;
    name: string;
    weather: string;
    description: string;
    icon: string;
    date: string;
    temp: string;
  } => {
    const data = req; //

    return {
      id: Math.floor(Math.random() * 10000) + 1,
      name: data.name || '',
      weather: data.weather[0].main || '',
      description: data.weather[0].description,
      icon:
        'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png',
      temp: data.main.temp.toString(),

      date: new Date(req.dt * 1000 + req.timezone * 1000).toString(),
    };
  };

  const APIKEY = 'adff9b2744c40831c29bd195c015f6a1';
  const weatherData: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (form === undefined || form.country === '') {
      // if (form?.country === "") {
      alert('Please input country');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      const db = getJsonData(data);

      setWeather([db, ...weather]);
    }
  };

  async function clear() {
    const clear = () => {
      setWeather([]);
      setForm({ country: '' });
    };
    useEffect(() => {}, [weather]);
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == 'country') {
      setForm({ ...form, country: value });
    }
  };

  return (
    <div className=''>
      <Head>
        <link rel='icon' href='/logoweather.ico' />
        <title>Daytech Weather App</title>
      </Head>

      <div className=''>
        <span className=''>Weather App</span>
        <br />
        <form>
          <input
            className='border border-red-300'
            type='text'
            placeholder='Please input country'
            name='country'
            onChange={(e) => handleChange(e)}
          />
          <button
            className='border border-red-300 '
            onClick={(e) => weatherData(e)}
          >
            Search
          </button>
          <button className='border border-red-300' onClick={(e) => clear()}>
            Clear
          </button>
        </form>

        <DisplayWeather data={weather} />
      </div>
    </div>
  );
}
