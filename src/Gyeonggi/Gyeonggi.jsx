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
import "../grap.css";
import GyeonggiTTBefore from "../TotalTable/GyeonggiTTBefore";
import GyeonggiTTAfter from "../TotalTable/GyeonggiTTAfter";

export default function Gyeonggi() {
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
        <Line_gyeonggi />
        <GyeonggiLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
