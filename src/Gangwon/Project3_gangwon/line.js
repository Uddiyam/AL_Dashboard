import React, { useState, useEffect, useRef } from "react";
import {GraphGangwonAfter} from "./LineChart";

export default function GangwonAfter() {
  const [colors, setColors]=useState(['gray','blue']);
  const data1 = [
    {
      name: "1",
      value: 229
    },
    {
      name: "2",
      value: 256
    },
    {
      name: "3",
      value: 233
    },
    {
      name: "4",
      value: 222
    },
    {
      name: "5",
      value: 226
    },
    {
      name: "6",
      value: 234
    },
    {
      name: "7",
      value: 245
    },
    {
      name: "8",
      value: 249
    },
    {
      name: "9",
      value: 242
    },
    {
      name: "10",
      value: 221
    },

    {
      name: "11",
      value: 234
    },

    {
      name: "12",
      value: 232
    },
  ];
  const data2 = [
    {
      name: "1",
      value: 245
    },
    {
      name: "2",
      value: 245
    },
    {
      name: "3",
      value: 239
    },
    {
      name: "4",
      value: 231
    },
    {
      name: "5",
      value: 235
    },
    {
      name: "6",
      value: 228
    },
    {
      name: "7",
      value: 243
    },
    {
      name: "8",
      value: 245
    },
    {
      name: "9",
      value: 242
    },
    {
      name: "10",
      value: 230
    },

    {
      name: "11",
      value: 232
    },

    {
      name: "12",
      value: 246
    },
  ];

  const prev = () =>{
    setColors(['red','gray']);
  }
  const next = () =>{
    setColors(['gray','blue']);
  }
  return (
    <div className="Line_Wrap">
      <h3>체류시간</h3>
      <GraphGangwonAfter colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}