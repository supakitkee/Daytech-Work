import Card from '../components/Layouts/Card';
import { IoClose } from 'react-icons/io5';
import React, { useState } from 'react';

export default function Weather({ list, onDelete }) {
  let dataConfirmed;
  let dataRecovered;
  let dataHospitalized;
  let dataDeaths;
  let dataUpdateDate;
  let h3Sty = 'text-l font-bold capitalize';

  dataConfirmed = (
    <h3 className={h3Sty}>
      <span>ติดเชื้อสะสม : </span>
      {`${list.value.Confirmed} คน`}
    </h3>
  );

  dataRecovered = (
    <h4 className={h3Sty}>
      <span>รักษาหายแล้ว : </span>
      {`${list.value.Recovered} คน`}
    </h4>
  );

  dataHospitalized = (
    <h5 className={h3Sty}>
      <span>รักษาตัวอยู่ในโรงพยาบาล : </span>
      {`${list.value.Hospitalized} คน`}
    </h5>
  );

  dataUpdateDate = (
    <h5 className={h3Sty}>
      <span>อัพเดทข้อมูลล่าสุด : </span>
      {`${list.value.UpdateDate} น.`}
    </h5>
  );

  dataDeaths = (
    <h6 className={h3Sty}>
      <span>เสียชีวิต : </span>
      {`${list.value.Deaths} คน`}
    </h6>
  );

  const handleCancel = function () {
    setModalActivCovid(false);
  };
  const handleDelete = function () {
    onDelete(list);
  };

  return (
    <>
      <Card
        title='Covid-19 in Thailand'
        closeBtn={<IoClose />}
        key={list.id}
        onDelete={handleDelete}
        list={list}
      >
        <div className='text-center'>
          {dataConfirmed}
          {dataRecovered}
          {dataHospitalized}
          {dataDeaths}
          {dataUpdateDate}
          <div className='text-xs text-gray-400'>
            <div className='mt-6 -mb-2 text-center'>{list.date}</div>
          </div>
        </div>
      </Card>
    </>
  );
}
