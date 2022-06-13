import React, { useState, useEffect, useRef } from "react";
import {GraphDaeguAfter} from "./LineChart";

export default function App() {
  const [colors, setColors]=useState(['gray','blue']);
  const data1 = [
    {
      name: "1",
      value: 166
    },
    {
      name: "2",
      value: 179
    },
    {
      name: "3",
      value: 170
    },
    {
      name: "4",
      value: 159
    },
    {
      name: "5",
      value: 160
    },
    {
      name: "6",
      value: 159
    },
    {
      name: "7",
      value: 168
    },
    {
      name: "8",
      value: 164
    },
    {
      name: "9",
      value: 174
    },
    {
      name: "10",
      value: 157
    },

    {
      name: "11",
      value: 158
    },

    {
      name: "12",
      value: 164
    },
  ];
  const data2 = [
    {
      name: "1",
      value: 175
    },
    {
      name: "2",
      value: 180
    },
    {
      name: "3",
      value: 169
    },
    {
      name: "4",
      value: 161
    },
    {
      name: "5",
      value: 163
    },
    {
      name: "6",
      value: 161
    },
    {
      name: "7",
      value: 166
    },
    {
      name: "8",
      value: 170
    },
    {
      name: "9",
      value: 174
    },
    {
      name: "10",
      value: 161
    },

    {
      name: "11",
      value: 162
    },

    {
      name: "12",
      value: 169
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
      <GraphDaeguAfter colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}