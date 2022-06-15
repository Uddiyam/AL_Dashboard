import React, { useState } from "react";
import GyeonggiLine from "./GyeonggiLine";
import KoreaMap from "../KoreaMap";
import Line_gyeonggi from "./Line_gyeonggi";
import GyeonggiTotal from "./d3/GyeonggiTotal";
import GyeonggiTotal2 from "./d3/GyeonggiTotal2";
import GyeonggiStayBefore from "./Project1_gyeonggi_before/Main";
import GyeonggiStayAfter from "./Project1_gyeonggi/Main";
import GyeonggiLineBefore from "./Project3_gyeonggi_before/line";
import GyeonggiLineAfter from "./Project3_gyeonggi/line";
import GyeonggiBeforeTable from "./table/GyeonggiBeforeTable";
import GyeonggiAfterTable from "./table/GyeonggiAfterTable";
import { MAIN_DATA } from "../../src/MainData";
import "../grap.css";
import GyeonggiTTBefore from "../TotalTable/GyeonggiTTBefore";
import GyeonggiTTAfter from "../TotalTable/GyeonggiTTAfter";

export default function Gyeonggi() {
  const [content, setContent] = useState("covidAfter");

  const onClick = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent1 = {
    covidBefore: <GyeonggiTotal />,
    covidAfter: <GyeonggiTotal2 />,
  };

  const selectComponent2 = {
    covidBefore: <GyeonggiStayBefore />,
    covidAfter: <GyeonggiStayAfter />,
  };

  const selectComponent3 = {
    covidBefore: <GyeonggiLineBefore />,
    covidAfter: <GyeonggiLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <GyeonggiBeforeTable />,
    covidAfter: <GyeonggiAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <GyeonggiTTBefore />,
    covidAfter: <GyeonggiTTAfter />,
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
        <Line_gyeonggi />
        <GyeonggiLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
