import WidgetTools from '../components/WidgetTools';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
      </Head>
      <WidgetTools />
    </div>
  );
}
