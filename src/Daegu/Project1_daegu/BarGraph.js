import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 28,
    방문자1: 57
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 24,
    방문자2: 41
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 38,
    방문자1: 56
    },
  {
    name: "2",
    type: 2,
    숙박방문자2: 30,
    방문자2: 42
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 34,
    방문자1: 67
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 30,
    방문자2: 52
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 26,
    방문자1: 52
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 25,
    방문자2: 43
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 29,
    방문자1: 57
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 27,
    방문자2: 48
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 26,
    방문자1: 52
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 23,
    방문자2: 42
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 35,
    방문자1: 60
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 27,
    방문자2: 46
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 31,
    방문자1: 60
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 27,
    방문자2: 44
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 37,
    방문자1: 61
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 32,
    방문자2: 50
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 27,
    방문자1: 58
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 26,
    방문자2: 50
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 29,
    방문자1: 56
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 26,
    방문자2: 50
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 31,
    방문자1: 61
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 29,
    방문자2: 47
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const DaeguBarAfter = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] =useState({
      숙박방문자1: "#A4A4A4",
      방문자1: "#000000",
    숙박방문자2: "#8181F7",
    방문자2: "#0000ee"
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

  <div className="Bar_Time">
    <h3>숙박시간</h3>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
      y축 * 10000
    </div>
  );
};