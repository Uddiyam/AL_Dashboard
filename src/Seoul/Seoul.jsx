import KoreaMap from "../KoreaMap";
import Line_seoul from "./Line_seoul";
import "../grap.css";
import Line from "./Project3/line";
import React, { useState } from "react";
import SeoulLine from "./SeoulLine";
import { MAIN_DATA } from "../../src/MainData";
import SeoulTotal from "./d3/SeoulTotal";
import SeoulTotal2 from "./d3/SeoulTotal2";
import SeoulStayBefore from "./Project1_seoul_before/Main";
import SeoulStayAfter from "./Project1_seoul/Main";

export default function Seoul() {
  const [content, setContent] = useState("covidAfter");

  const onClick = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent1 = {
    covidBefore: <SeoulTotal />,
    covidAfter: <SeoulTotal2 />,
  };

  const selectComponent2 = {
    covidBefore: <SeoulStayBefore />,
    covidAfter: <SeoulStayAfter />,
  };

  return (
    <>
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
        <Line />
      </div>
      <div className="grap_wrap">
        {content && <div>{selectComponent1[content]}</div>}
      </div>
      <Line_seoul />
      <SeoulLine />
    </>
  );
}
