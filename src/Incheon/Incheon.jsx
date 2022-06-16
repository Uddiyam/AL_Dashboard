import KoreaMap from "../KoreaMap";
import IncheonLine from "./IncheonLine";
import Line_incheon from "./Line_incheon";
import "../grap.css";
import React, { useState } from "react";
import IncheonTotal from "./d3/IncheonTotal";
import IncheonTotal2 from "./d3/IncheonTotal2";
import IncheonStayBefore from "./d3/Project1_incheon_before/Main";
import IncheonStayAfter from "./d3/Project1_incheon/Main";
import IncheonLineBefore from "./d3/Project3_incheon_before/line";
import IncheonLineAfter from "./d3/Project3_incheon/line";
import IncheonBeforeTable from "./table/IncheonBeforeTable";
import IncheonAfterTable from "./table/IncheonAfterTable";
import IncheonTTBefore from "../TotalTable/IncheonTTBefore";
import IncheonTTAfter from "../TotalTable/IncheonTTAfter";

export default function Incheon() {
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
    covidBefore: <IncheonTotal />,
    covidAfter: <IncheonTotal2 />,
  };

  const selectComponent2 = {
    covidBefore: <IncheonStayBefore />,
    covidAfter: <IncheonStayAfter />,
  };

  const selectComponent3 = {
    covidBefore: <IncheonLineBefore />,
    covidAfter: <IncheonLineAfter />,
  };

  const selectComponent4 = {
    covidBefore: <IncheonBeforeTable />,
    covidAfter: <IncheonAfterTable />,
  };

  const selectComponent5 = {
    covidBefore: <IncheonTTBefore />,
    covidAfter: <IncheonTTAfter />,
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
        <Line_incheon />
        <IncheonLine />
      </div>

      <div className="table">
        {content && <div>{selectComponent4[content]}</div>}
      </div>
    </>
  );
}
