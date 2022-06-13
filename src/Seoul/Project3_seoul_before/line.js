import React, { useState, useEffect, useRef } from "react";
import {GraphSeoulBefore} from "./LineChart";

export default function SeoulLineBefore() {
  const [colors, setColors]=useState(['red','gray']);
  const data1 = [
    {
      name: "1",
      value: 180
    },
    {
      name: "2",
      value: 189
    },
    {
      name: "3",
      value: 186
    },
    {
      name: "4",
      value: 168
    },
    {
      name: "5",
      value: 173
    },
    {
      name: "6",
      value: 182
    },
    {
      name: "7",
      value: 187
    },
    {
      name: "8",
      value: 190
    },
    {
      name: "9",
      value: 187
    },
    {
      name: "10",
      value: 180
    },

    {
      name: "11",
      value: 177
    },

    {
      name: "12",
      value: 171
    },
  ];
  const data2 = [
    {
      name: "1",
      value: 195
    },
    {
      name: "2",
      value: 187
    },
    {
      name: "3",
      value: 181
    },
    {
      name: "4",
      value: 168
    },
    {
      name: "5",
      value: 172
    },
    {
      name: "6",
      value: 170
    },
    {
      name: "7",
      value: 180
    },
    {
      name: "8",
      value: 180
    },
    {
      name: "9",
      value: 182
    },
    {
      name: "10",
      value: 171
    },

    {
      name: "11",
      value: 173
    },

    {
      name: "12",
      value: 178
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
      <GraphSeoulBefore colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}