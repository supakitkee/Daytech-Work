import { MdEdit, MdRefresh } from 'react-icons/md';
import weatherAPI from '../pages/api/weatherAPI';
import EditJustX from './AddWidgets/EditJustX';
import Card from '../components/Layouts/Card';
import { IoClose } from 'react-icons/io5';
import React, { useState } from 'react';
import Modal from './Layouts/Modal';

export default function Weather({ list, onDelete, onFix }) {
  const [modalActiveFixWeather, setModalActivFixWeather] = useState(false);
  let dataName;
  let dataIconDesc;
  let dataTemp;
  let reBtnCard;
  let h3Sty = 'text-xl font-bold capitalize';

  if (list.type === 'weatherNF') {
    dataName = <h3 className={`${h3Sty} text-red-600`}>{list.value}</h3>;
    dataIconDesc = (
      <h4 className='text-red-400 -mt-1'>
        <span className='align-middle'>City not found</span>
      </h4>
    );

    dataTemp = (
      <h2 className='text-red-500 mt-1 text-5xl font-extralight'>--</h2>
    );
  } else {
    reBtnCard = <MdRefresh />;
    dataName = <h3 className={h3Sty}>{list.value.name}</h3>;
    dataIconDesc = (
      <h4 className='text-gray-400 -mt-1 flex justify-center items-center'>
        <img
          className='h-10 w-10 '
          src={`http://openweathermap.org/img/wn/${list.value.weather[0].icon}@2x.png`}
          alt='logo'
        />
        <span className='pr-2'>{list.value.weather[0].description}</span>
      </h4>
    );
    dataTemp = (
      <h2 className='text-gray-500 mt-1 text-5xl font-extralight'>
        {`${parseInt(list.value.main.temp)}°`}
      </h2>
    );
  }

  const handleCancel = function () {
    setModalActivFixWeather(false);
  };
  const handleDelete = function () {
    onDelete(list);
  };

  const handleEdit = function () {
    setModalActivFixWeather(true);
  };

  const handleRefresh = async () => {
    try {
      const res = await weatherAPI.get('/data/2.5/weather', {
        params: {
          q: list.value.name,
          units: 'metric',
        },
      });

      const { data } = res;

      onFix(list.id, 'weather', data); //New City
    } catch {
      onFix(list.id, 'weatherNF', list.value.name); //City not found!
    }
  };

  const onEditSubmit = async (id, type, name) => {
    try {
      const res = await weatherAPI.get('/data/2.5/weather', {
        params: {
          q: name,
          units: 'metric',
        },
      });

      const { data } = res;

      onFix(id, 'weather', data); //New City
    } catch {
      onFix(id, 'weatherNF', name); //City not found!
    }

    setModalActivFixWeather(false);
  };

  return (
    <>
      {modalActiveFixWeather && (
        <Modal onCancel={handleCancel}>
          <EditJustX
            title='Edit Weather'
            onEditSubmit={onEditSubmit}
            list={list}
          />
        </Modal>
      )}
      <Card
        title='Weather'
        closeBtn={<IoClose />}
        editBtn={<MdEdit />}
        refreshBtn={reBtnCard}
        key={list.id}
        onDelete={handleDelete}
        onEdit={handleEdit}
        restart={handleRefresh}
        list={list}
      >
        <div className='text-center'>
          {dataName}
          {dataIconDesc}
          {dataTemp}
          <div className='text-xs text-gray-400'>
            <div className='mt-6 -mb-2 text-center'>{list.date}</div>
          </div>
        </div>
      </Card>
    </>
  );
}
