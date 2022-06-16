import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 128,
    방문자1: 382
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 110,
    방문자2: 245
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 141,
    방문자1: 317
    },
  {
    name: "2",
    type: 2,
    숙박방문자2: 119,
    방문자2: 257
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 164,
    방문자1: 464
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 130,
    방문자2: 338
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 112,
    방문자1: 345
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 108,
    방문자2: 273
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 148,
    방문자1: 390
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 116,
    방문자2: 297
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 151,
    방문자1: 382
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 110,
    방문자2: 297
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 178,
    방문자1: 427
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 115,
    방문자2: 258
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 190,
    방문자1: 462
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 112,
    방문자2: 264
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 174,
    방문자1: 425
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 123,
    방문자2: 288
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 166,
    방문자1: 426
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 119,
    방문자2: 318
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 166,
    방문자1: 463
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 123,
    방문자2: 328
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 147,
    방문자1: 414
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 131,
    방문자2: 295
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const D3BarGraph = () => {
  const [keys, setKeys] = useState(allKeys);
  const [colors, setColors] =useState({
    숙박방문자1: "#F5A9BC",
    방문자1: "red",
    숙박방문자2: "#A4A4A4",
    방문자2: "#000000"
});

  return (
    <div className="days">
    <h3>숙박시간</h3>
      <StackedBarGraph datasets={data} colors={colors} keys={keys} />
      y축 * 10000
    </div>
  );
};