import KoreaMap from "../KoreaMap";
import GangwonLine from "./GangwonLine";
import Line_gangwon from "./Line_gangwon";
import "../grap.css";
import React, { useState } from "react";
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
        <Line_gangwon />
        <GangwonLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
