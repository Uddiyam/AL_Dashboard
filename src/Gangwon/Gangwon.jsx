import KoreaMap from "../KoreaMap";
import GangwonLine from "./GangwonLine";
import Line_gangwon from "./Line_gangwon";
import "../grap.css";
import React, { useState } from "react";
import { MAIN_DATA } from "../../src/MainData";
import GangwonTotal from "./GangwonTotal";
import GangwonTotal2 from "./GangwonTotal2";
import GangwonStayBefore from "./Project1_gangwon_before/Main";
import GangwonStayAfter from "./Project1_gangwon/Main";
import GangwonLineBefore from "./Project3_gangwon_before/line";
import GangwonLineAfter from "./Project3_gangwon/line";
import GangwonBeforeTable from "./table/before/GangwonBeforeTable";
import GangwonAfterTable from "./table/after/GangwonAfterTable";
import GangwonTTBefore from "../TotalTable/GangwonTTBefore";
import GangwonTTAfter from "../TotalTable/GangwonTTAfter";

export default function Gangwon() {
  const [content, setContent] = useState("covidAfter");

  const onClick = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent1 = {
    covidBefore: <GangwonTotal />,
    covidAfter: <GangwonTotal2 />,
  };

  const selectComponent2 = {
    covidBefore: <GangwonStayBefore />,
    covidAfter: <GangwonStayAfter />,
  };

  const selectComponent3 = {
    covidBefore: <GangwonLineBefore />,
    covidAfter: <GangwonLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <GangwonBeforeTable />,
    covidAfter: <GangwonAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <GangwonTTBefore />,
    covidAfter: <GangwonTTAfter />,
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
        <Line_gangwon />
        <GangwonLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
