import Head from "next/head";
import "tailwindcss/tailwind.css";
import Card from "../components/Card"
import Nav from "../components/Nav";
import OnTop from "../components/OnTop";
import BorderTop from "../components/BorderTop";

export default function Home() {
  return (
    <div>
      <Head>
        <title>About - Daytech Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BorderTop>
          <OnTop />
        <Nav />

        <h2 className="text-2xl undefined">About</h2>
        <div className="pt-3">
          <Card title='I love <programming />'>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">
            {'I love <programming />'}
            </h2>
            <p>
              Currently, we have only <strong>JustSay</strong>
              , <strong>Counter</strong> and
              <strong> Timer</strong> widgets.
            </p>
            <p>
              Crafted with <span className="text-red-600">♥</span> by Book.
            </p>
            </Card>
          </div>
          </BorderTop >
      </div>
    
  );
}
