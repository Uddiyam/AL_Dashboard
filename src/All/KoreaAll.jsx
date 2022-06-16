import KoreaMap from "../KoreaMap";
import "../grap.css";
import React, { useState } from "react";
import Korea from "./Korea";
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
import KoreaTTBefore from "../TotalTable/KoreaTTBefore";
import KoreaTTAfter from "../TotalTable/KoreaTTAfter";

export default function KoreaAll() {
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
  const selectComponent6 = {
    covidBefore: <KoreaTTBefore />,
    covidAfter: <KoreaTTAfter />,
  };

  return (
    <>
      <div>{content && <div>{selectComponent6[content]}</div>}</div>
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
