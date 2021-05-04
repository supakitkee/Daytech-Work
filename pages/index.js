import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Time from "../components/Time";
import Counter from "../components/Counter";
import Nav from "../components/Nav";
import JustSay from "../components/JustSay";
import OnTop from "../components/OnTop";
import BorderTop from "../components/BorderTop";
import Header from "../components/Header";

export default function Home() {

  return (
    <div>
      <Header />
        <BorderTop>
          <OnTop />
            <Nav />
            <h2 className="text-2xl undefined">Widgets</h2>
              <div className="pt-3">
                <div className="md:masonry">
              <JustSay />
              <Counter />
              <Time/>
            </div>
          </div>
        </BorderTop >
      </div>  
  );
}
