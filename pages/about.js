import Head from 'next/head';
import React from 'react';

const about = () => {
  return (
    <div>
      <Head>
        <title>About - Daytech Dashboard</title>
      </Head>
      <h2 className='text-xl undefined'>About</h2>
      <div className='pt-3'>
        <div className='p-5 border-1 bg-white rounded-2xl'>
          <h2 className='text-lg font-bold text-gray-400 mb-1.5'>
            I love &lt;programming /&gt;
          </h2>
          <p>
            We have <strong>JustSay</strong>, <strong>JustShout</strong>,{' '}
            <strong>Counter</strong>,<strong>Timer</strong>,{' '}
            <strong>Weather</strong> and super hard <strong>TH Covid</strong>{' '}
            widgets! You can now add /
          </p>
          <p>
            {' '}
            modify / delete widgets or even destroy all of them, also view super
            great useless statistics! Now bundled with state persistence, that
            remember your widgets eternally, except you wipe up your browser
            data :P
          </p>
          <p>
            <br />
            Crafted with <span className='text-red-600'>♥</span> by Champ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
