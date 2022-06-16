import React, { useState } from "react";
import JejuLine from "./JejuLine";
import KoreaMap from "../KoreaMap";
import Line_jeju from "./Line_jeju";
import JejuTotal from "./d3/JejuTotal";
import JejuTotal2 from "./d3/JejuTotal2";
import JejuStayBefore from "./Project1_jeju_before/Main";
import JejuStayAfter from "./Project1_jeju/Main";
import JejuLineBefore from "./Project3_jeju_before/line";
import JejuLineAfter from "./Project3_jeju/line";
import JejuBeforeTable from "./table/JejuBeforeTable";
import JejuAfterTable from "./table/JejuAfterTable";
import "../grap.css";
import JejuTTBefore from "../TotalTable/JejuTTBefore";
import JejuTTAfter from "../TotalTable/JejuTTAfter";
export default function Jeju() {
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
    covidBefore: <JejuTotal />,
    covidAfter: <JejuTotal2 />,
  };

  const selectComponent2 = {
    covidBefore: <JejuStayBefore />,
    covidAfter: <JejuStayAfter />,
  };

  const selectComponent3 = {
    covidBefore: <JejuLineBefore />,
    covidAfter: <JejuLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <JejuBeforeTable />,
    covidAfter: <JejuAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <JejuTTBefore />,
    covidAfter: <JejuTTAfter />,
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
        <Line_jeju />
        <JejuLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
