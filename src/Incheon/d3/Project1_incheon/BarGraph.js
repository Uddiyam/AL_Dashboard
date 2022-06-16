import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 32,
    방문자1: 106
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 28,
    방문자2: 68
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 38,
    방문자1: 93
    },
  {
    name: "2",
    type: 2,
    숙박방문자2: 32,
    방문자2: 72
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 41,
    방문자1: 120
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 33,
    방문자2: 87
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 30,
    방문자1: 97
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 30,
    방문자2: 77
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 38,
    방문자1: 106
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 33,
    방문자2: 87
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 41,
    방문자1: 107
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 31,
    방문자2: 83
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 47,
    방문자1: 113
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 33,
    방문자2: 78
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 54,
    방문자1: 131
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 33,
    방문자2: 81
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 48,
    방문자1: 119
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 38,
    방문자2: 87
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 42,
    방문자1: 118
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 34,
    방문자2: 90
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 42,
    방문자1: 122
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 33,
    방문자2: 82
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 36,
    방문자1: 111
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 35,
    방문자2: 78
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const IncheonBarAfter = () => {
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