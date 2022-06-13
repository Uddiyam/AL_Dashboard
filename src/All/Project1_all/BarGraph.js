import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "서울",
    type: 1,
    방문자1: 382
  },
  {
    name: "서울",
    type: 2,
    방문자2: 245
  },
  {
    name: "부산",
    type: 1,
    방문자1: 317
    },
  {
    name: "부산",
    type: 2,
    방문자2: 257
  },
  {
    name: "대구",
    type: 1,
    방문자1: 464
  },
  {
    name: "대구",
    type: 2,
    방문자2: 338
  },
  {
    name: "인천",
    type: 1,
    방문자1: 345
  },
  {
    name: "인천",
    type: 2,
    방문자2: 273
  },
  {
    name: "경기도",
    type: 1,
    방문자1: 390
  },
  {
    name: "경기도",
    type: 2,
    방문자2: 297
  },
  {
    name: "강원도",
    type: 1,
    방문자1: 382
  },
  {
    name: "강원도",
    type: 2,
    방문자2: 297
  },
  {
    name: "제주",
    type: 1,
    방문자1: 427
  },
  {
    name: "제주",
    type: 2,
    방문자2: 258
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const AllBarAfter = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] =useState({
      방문자1: "#000000",
    방문자2: "#0000ee"
  });

  const prev = () =>{
    setColors({
      방문자1: "red",
      방문자2: "#000000"
    });
  }
  const next = () =>{
    setColors({
      방문자1: "#000000",
      방문자2: "#0000ee"
    });
  }
  return (
    <div className="Bar_Time">
    <h3>숙박시간</h3>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
      y축 * 10000
    </div>
  );
};