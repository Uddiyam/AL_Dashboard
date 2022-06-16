import KoreaMap from "../KoreaMap";
import Line_seoul from "./Line_seoul";
import "../grap.css";
import React, { useState } from "react";
import SeoulLine from "./SeoulLine";
import SeoulTotal from "./d3/SeoulTotal";
import SeoulTotal2 from "./d3/SeoulTotal2";
import SeoulStayBefore from "./Project1_seoul_before/Main";
import SeoulStayAfter from "./Project1_seoul/Main";
import SeoulLineBefore from "./Project3_seoul_before/line";
import SeoulLineAfter from "./Project3_seoul/line";
import SeoulBeforeTable from "./table/SeoulBeforeTable";
import SeoulAfterTable from "./table/SeoulAfterTable";
import SeoulTTBefore from "../TotalTable/SeoulTTBefore";
import SeoulTTAfter from "../TotalTable/SeoulTTAfter";

export default function Seoul() {
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
        <Line_seoul />
        <SeoulLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
