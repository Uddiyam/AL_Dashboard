import React, { useState, useEffect, useRef } from "react";
import {GraphGyeongiAfter} from "./LineChart";

export default function GyeongiAfter(){
  const [colors, setColors]=useState(['gray','#084B8A']);
  const data1 = [
    {
      name: "1",
      value: 195
    },
    {
      name: "2",
      value: 206
    },
    {
      name: "3",
      value: 203
    },
    {
      name: "4",
      value: 184
    },
    {
      name: "5",
      value: 189
    },
    {
      name: "6",
      value: 197
    },
    {
      name: "7",
      value: 202
    },
    {
      name: "8",
      value: 205
    },
    {
      name: "9",
      value: 202
    },
    {
      name: "10",
      value: 195
    },

    {
      name: "11",
      value: 195
    },

    {
      name: "12",
      value: 188
    },
  ];
  const data2 = [
    {
      name: "1",
      value: 203
    },
    {
      name: "2",
      value: 198
    },
    {
      name: "3",
      value: 195
    },
    {
      name: "4",
      value: 183
    },
    {
      name: "5",
      value: 186
    },
    {
      name: "6",
      value: 184
    },
    {
      name: "7",
      value: 192
    },
    {
      name: "8",
      value: 191
    },
    {
      name: "9",
      value: 193
    },
    {
      name: "10",
      value: 183
    },

    {
      name: "11",
      value: 188
    },

    {
      name: "12",
      value: 193
    },
  ];

  return (
    <div className="Line_Wrap">
      <h3>체류시간</h3>
      <GraphGyeongiAfter colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}