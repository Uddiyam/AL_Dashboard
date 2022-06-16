import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 45,
    방문자1: 73
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 38,
    방문자2: 50
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 60,
    방문자1: 71
    },
  {
    name: "2",
    type: 2,
    숙박방문자2: 48,
    방문자2: 53
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 54,
    방문자1: 87
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 48,
    방문자2: 69
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 40,
    방문자1: 66
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 40,
    방문자2: 51
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 52,
    방문자1: 80
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 46,
    방문자2: 61
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 45,
    방문자1: 68
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 42,
    방문자2: 58
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 58,
    방문자1: 77
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 47,
    방문자2: 57
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 57,
    방문자1: 80
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 44,
    방문자2: 54
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 60,
    방문자1: 80
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 51,
    방문자2: 61
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 46,
    방문자1: 74
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 46,
    방문자2: 65
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 50,
    방문자1: 70
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 46,
    방문자2: 60
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 55,
    방문자1: 79
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 50,
    방문자2: 60
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const BusanBarAfter = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] =useState({
      숙박방문자1: "#A4A4A4",
      방문자1: "#000000",
    숙박방문자2: "#8181F7",
    방문자2: "#084B8A"
  });

  return (
    <div>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
    </div>
  );
};