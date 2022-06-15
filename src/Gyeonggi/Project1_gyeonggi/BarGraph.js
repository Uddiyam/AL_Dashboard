import React, { useState } from "react";
import { StackedBarGraph } from "./StackedBarGraph";

const data = [
  {
    name: "1",
    type: 1,
    숙박방문자1: 144,
    방문자1: 319
  },
  {
    name: "1",
    type: 2,
    숙박방문자2: 131,
    방문자2: 260
  },
  {
    name: "2",
    type: 1,
    숙박방문자1: 168,
    방문자1: 267
    },
  {
    name: "2",
    type: 2,
    숙박방문자2: 150,
    방문자2: 269
  },
  {
    name: "3",
    type: 1,
    숙박방문자1: 194,
    방문자1: 418
  },
  {
    name: "3",
    type: 2,
    숙박방문자2: 158,
    방문자2: 352
  },
  {
    name: "4",
    type: 1,
    숙박방문자1: 134,
    방문자1: 314
  },
  {
    name: "4",
    type: 2,
    숙박방문자2: 138,
    방문자2: 304
  },
  {
    name: "5",
    type: 1,
    숙박방문자1: 170,
    방문자1: 360
  },
  {
    name: "5",
    type: 2,
    숙박방문자2: 148,
    방문자2: 336
  },
  {
    name: "6",
    type: 1,
    숙박방문자1: 178,
    방문자1: 361
  },
  {
    name: "6",
    type: 2,
    숙박방문자2: 136,
    방문자2: 315
  },
  {
    name: "7",
    type: 1,
    숙박방문자1: 214,
    방문자1: 391
  },
  {
    name: "7",
    type: 2,
    숙박방문자2: 151,
    방문자2: 301
  },
  {
    name: "8",
    type: 1,
    숙박방문자1: 233,
    방문자1: 391
  },
  {
    name: "8",
    type: 2,
    숙박방문자2: 147,
    방문자2: 306
  },
  {
    name: "9",
    type: 1,
    숙박방문자1: 210,
    방문자1: 400
  },
  {
    name: "9",
    type: 2,
    숙박방문자2: 167,
    방문자2: 325
  },
  {
    name: "10",
    type: 1,
    숙박방문자1: 189,
    방문자1: 396
  },
  {
    name: "10",
    type: 2,
    숙박방문자2: 155,
    방문자2: 347
  },
  {
    name: "11",
    type: 1,
    숙박방문자1: 185,
    방문자1: 404
  },
  {
    name: "11",
    type: 2,
    숙박방문자2: 150,
    방문자2: 319
  },
  {
    name: "12",
    type: 1,
    숙박방문자1: 158,
    방문자1: 341
  },
  {
    name: "12",
    type: 2,
    숙박방문자2: 162,
    방문자2: 297
  }
];

const allKeys = ["숙박방문자1", "방문자1","숙박방문자2", "방문자2"];


export const GyeongiBarAfter = () => {
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