import React, { useState } from "react";
import KoreaMap from "../KoreaMap";
import "../grap.css";
import { MAIN_DATA } from "../../src/MainData";
import CountryTotal2 from "./d3/CountryTotal2";
import CountryTotal from "./d3/CountryTotal";
import Korea from "./Korea";

export default function KoreaAll() {
  const [content, setContent] = useState("covidAfter");

  const onClick = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent1 = {
    covidBefore: <CountryTotal />,
    covidAfter: <CountryTotal2 />,
  };

  return (
    <>
      <KoreaMap />
      <div>
        {MAIN_DATA.map((data) => {
          return (
            <button onClick={onClick} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </div>
      {content && <div>{selectComponent1[content]}</div>}
      <Korea />
    </>
  );
}
