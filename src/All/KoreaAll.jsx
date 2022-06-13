import KoreaMap from "../KoreaMap";
import "../grap.css";
import React, { useState } from "react";
import Korea from "./Korea";
import { MAIN_DATA } from "../../src/MainData";
import CountryTotal from "./d3/CountryTotal";
import CountryTotal2 from "./d3/CountryTotal2";
import AllStayBefore from "./Project1_all_before/Main";
import AllStayAfter from "./Project1_all/Main";
import AllLineBefore from "./Project3_all_before/line";
import AllLineAfter from "./Project3_all/line";
import AllBeforeTable from "./table/before/CountryBeforeTable";
import AllAfterTable from "./table/after/CountryAfterTable";
import KoreaBar from "../BarChart/KoreaBar";
import KoreaBar_After from "../BarChart/KoreaBar_After";

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

  const selectComponent2 = {
    covidBefore: <AllStayBefore />,
    covidAfter: <AllStayAfter />,
  };

  const selectComponent3 = {
    covidBefore: <AllLineBefore />,
    covidAfter: <AllLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <AllBeforeTable />,
    covidAfter: <AllAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <KoreaBar />,
    covidAfter: <KoreaBar_After />,
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
        {content && <div>{selectComponent3[content]}</div>}
      </div>
      <div className="grap_wrap">
        {content && <div>{selectComponent1[content]}</div>}
      </div>
      <div>
        <Korea />
      </div>

      <div className="table_korea">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
      <div className="korea_box">
        {content && <div>{selectComponent5[content]}</div>}
      </div>
    </>
  );
}
