import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 24,
    방문자1: 21
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 16,
    방문자2: 15
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 24,
    방문자1: 17
    },
  {
    name: "2",
    type: 2,
    숙박방문자2: 23,
    방문자2: 15
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 24,
    방문자1: 23
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 26,
    방문자2: 22
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 24,
    방문자1: 20
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 31,
    방문자2: 20
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 25,
    방문자1: 21
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 32,
    방문자2: 22
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 24,
    방문자1: 20
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 32,
    방문자2: 20
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 28,
    방문자1: 23
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 34,
    방문자2: 23
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 31,
    방문자1: 26
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 30,
    방문자2: 22
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 24,
    방문자1: 21
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 27,
    방문자2: 18
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 27,
    방문자1: 24
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 35,
    방문자2: 24
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 25,
    방문자1: 22
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 34,
    방문자2: 22
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 25,
    방문자1: 24
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 31,
    방문자2: 22
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const JejuBarAfter = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] =useState({
      숙박방문자1: "#A4A4A4",
      방문자1: "#000000",
    숙박방문자2: "#8181F7",
    방문자2: "#084B8A"
  });

  return (
    <div className="Bar_Time">
      <h3>숙박시간</h3>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
      y축 * 10000
    </div>
  );
};