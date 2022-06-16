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
import "../grap.css";
import DaeguTTBefore from "../TotalTable/DaeguTTBefore";
import DaeguTTAfter from "../TotalTable/DaeguTTAfter";

export default function Daegu() {
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
        <Line_daegu />
        <DaeguLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
