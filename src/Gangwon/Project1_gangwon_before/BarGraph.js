import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 43,
    방문자1: 66
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 29,
    방문자2: 44
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 53,
    방문자1: 55
    },
  {
    name: "2",
    type: 2,
    숙박방문자2: 42,
    방문자2: 47
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 45,
    방문자1: 68
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 35,
    방문자2: 52
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 32,
    방문자1: 57
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 40,
    방문자2: 56
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 40,
    방문자1: 63
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 45,
    방문자2: 67
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 47,
    방문자1: 68
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 46,
    방문자2: 67
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 62,
    방문자1: 79
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 63,
    방문자2: 71
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 87,
    방문자1: 114
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 65,
    방문자2: 80
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 52,
    방문자1: 72
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 55,
    방문자2: 66
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 44,
    방문자1: 76
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 54,
    방문자2: 74
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 44,
    방문자1: 76
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 42,
    방문자2: 59
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 46,
    방문자1: 66
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 48,
    방문자2: 62
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const GangWonBarBefore = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] =useState({
    숙박방문자1: "#F5A9BC",
    방문자1: "red",
    숙박방문자2: "#A4A4A4",
    방문자2: "#000000"
});
 
  const prev = () =>{
    setColors({
      숙박방문자1: "#F5A9BC",
      방문자1: "red",
      숙박방문자2: "#A4A4A4",
      방문자2: "#000000"
    });
  }
  const next = () =>{
    setColors({
      숙박방문자1: "#A4A4A4",
      방문자1: "#000000",
      숙박방문자2: "#8181F7",
      방문자2: "#0000ee"
    });
  }
  return (
    <div className="days">
      <h3>숙박시간</h3>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
      y축 * 10000
    </div>
  );
};