import React, { useState } from "react";
import DaeguLine from "./DaeguLine";
import KoreaMap from "../KoreaMap";
import Line_daegu from "./Line_daegu";
import DaeguTotal from "./d3/DaeguTotal";
import DaeguTotal2 from "./d3/DaeguTotal2";
import DaeguStayBefore from "./Project1_daegu_before/Main";
import DaeguStayAfter from "./Project1_daegu/Main";
import DaeguLineBefore from "./Project3_daegu_before/line";
import DaeguLineAfter from "./Project3_daegu/line";
import DaeguBeforeTable from "./table/before/DaeguBeforeTable";
import DaeguAfterTable from "./table/after/DaeguAfterTable";
import { MAIN_DATA } from "../../src/MainData";
import "../grap.css";
import DaeguTTBefore from "../TotalTable/DaeguTTBefore";
import DaeguTTAfter from "../TotalTable/DaeguTTAfter";

export default function Daegu() {
  const [content, setContent] = useState("covidAfter");

  const onClick = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent1 = {
    covidBefore: <DaeguTotal />,
    covidAfter: <DaeguTotal2 />,
  };

  const selectComponent2 = {
    covidBefore: <DaeguStayBefore />,
    covidAfter: <DaeguStayAfter />,
  };

  const selectComponent3 = {
    covidBefore: <DaeguLineBefore />,
    covidAfter: <DaeguLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <DaeguBeforeTable />,
    covidAfter: <DaeguAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <DaeguTTBefore />,
    covidAfter: <DaeguTTAfter />,
  };

  return (
    <>
      <div>{content && <div>{selectComponent5[content]}</div>}</div>
      <KoreaMap />
      <div className="btn">
        {MAIN_DATA.map((data) => {
          return (
            <button onClick={onClick} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </div>
      <div className="days">
        {content && <div>{selectComponent2[content]}</div>}
      </div>

      <div className="time">
        {content && <div>{selectComponent3[content]}</div>}
      </div>
      <div className="grap_wrap">
        {content && <div>{selectComponent1[content]}</div>}
      </div>
      <div>
        <Line_daegu />
        <DaeguLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
