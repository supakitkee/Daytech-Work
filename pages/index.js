import React from 'react'
import Head from 'next/head'
import WidgetTools from '../components/WidgetTools'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
      </Head>
      <WidgetTools />
    </div>
  )
}
