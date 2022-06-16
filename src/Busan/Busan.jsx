import React, { useState } from "react";
import BusanLine from "./BusanLine";
import KoreaMap from "../KoreaMap";
import Line_Busan from "./Line_Busan";
import BusanTotal from "./d3/BusanTotal";
import BusanTotal2 from "./d3/BusanTotal2";
import BusanStayBefore from "./d3/Project1_busan_before/Main";
import BusanStayAfter from "./d3/Project1_busan/Main";
import BusanLineBefore from "./d3/Project3_busan_before/line";
import BusanLineAfter from "./d3/Project3_busan/line";
import BusanBeforeTable from "./table/BusanBeforeTable";
import BusanAfterTable from "./table/BusanAfterTable";
import "../grap.css";
import BusanTTBefore from "../TotalTable/BusanTTBefore";
import BusanTTAfter from "../TotalTable/BusanTTAfter";

export default function Busan() {
  const [content, setContent] = useState("covidAfter");
  const [click_Before, setClick_Before] = useState({
    info: {
      color: "black",
      backcolor: "white",
    },
  });
  const [click_After, setClick_After] = useState({
    info: {
      color: "white",
      backcolor: "#084B8A",
    },
  });

  const onClick = (e) => {
    const { name } = e.target;
    setContent(name);
    if (e.target.name === "covidBefore") {
      setClick_Before((prevState) => ({
        ...prevState,
        info: {
          ...prevState.info,
          color: "white",
          backcolor: "#DF3A01",
        },
      }));
      setClick_After((prevState) => ({
        ...prevState,
        info: {
          ...prevState.info,
          color: "black",
          backcolor: "white",
        },
      }));
    } else {
      setClick_Before((prevState) => ({
        ...prevState,
        info: {
          ...prevState.info,
          color: "black",
          backcolor: "white",
        },
      }));
      setClick_After((prevState) => ({
        ...prevState,
        info: {
          ...prevState.info,
          color: "white",
          backcolor: "#084B8A",
        },
      }));
    }
  };

  const selectComponent1 = {
    covidBefore: <BusanTotal />,
    covidAfter: <BusanTotal2 />,
  };

  const selectComponent2 = {
    covidBefore: <BusanStayBefore />,
    covidAfter: <BusanStayAfter />,
  };

  const selectComponent3 = {
    covidBefore: <BusanLineBefore />,
    covidAfter: <BusanLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <BusanBeforeTable />,
    covidAfter: <BusanAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <BusanTTBefore />,
    covidAfter: <BusanTTAfter />,
  };

  return (
    <>
      <div>{content && <div>{selectComponent5[content]}</div>}</div>
      <KoreaMap />
      <div className="btn">
        <button
          onClick={onClick}
          name="covidBefore"
          key="1"
          style={{
            color: click_Before.info.color,
            backgroundColor: click_Before.info.backcolor,
          }}
        >
          코로나 전
        </button>
        <button
          onClick={onClick}
          name="covidAfter"
          key="2"
          style={{
            color: click_After.info.color,
            backgroundColor: click_After.info.backcolor,
          }}
        >
          코로나 후
        </button>
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
        <Line_Busan />
        <BusanLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
