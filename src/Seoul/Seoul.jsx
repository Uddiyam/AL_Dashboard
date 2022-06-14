import KoreaMap from "../KoreaMap";
import Line_seoul from "./Line_seoul";
import "../grap.css";
import React, { useState } from "react";
import SeoulLine from "./SeoulLine";
import { MAIN_DATA } from "../../src/MainData";
import SeoulTotal from "./d3/SeoulTotal";
import SeoulTotal2 from "./d3/SeoulTotal2";
import SeoulStayBefore from "./Project1_seoul_before/Main";
import SeoulStayAfter from "./Project1_seoul/Main";
import SeoulLineBefore from "./Project3_seoul_before/line";
import SeoulLineAfter from "./Project3_seoul/line";
import SeoulBeforeTable from "./table/before/SeoulBeforeTable";
import SeoulAfterTable from "./table/after/SeoulAfterTable";
import SeoulTTBefore from "../TotalTable/SeoulTTBefore";
import SeoulTTAfter from "../TotalTable/SeoulTTAfter";

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

  const selectComponent3 = {
    covidBefore: <SeoulLineBefore />,
    covidAfter: <SeoulLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <SeoulBeforeTable />,
    covidAfter: <SeoulAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <SeoulTTBefore />,
    covidAfter: <SeoulTTAfter />,
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
        <Line_seoul />
        <SeoulLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
