import React, { useState, useEffect, useRef } from "react";
import {GraphJejuBefore} from "./LineChart";

export default function JejuBefore(){
  const [colors, setColors]=useState(['red','gray']);
  const data1 = [
    {
      name: "1",
      value: 188
    },
    {
      name: "2",
      value: 187
    },
    {
      name: "3",
      value: 188
    },
    {
      name: "4",
      value: 175
    },
    {
      name: "5",
      value: 175
    },
    {
      name: "6",
      value: 181
    },
    {
      name: "7",
      value: 190
    },
    {
      name: "8",
      value: 186
    },
    {
      name: "9",
      value: 188
    },
    {
      name: "10",
      value: 176
    },

    {
      name: "11",
      value: 181
    },

    {
      name: "12",
      value: 187
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
      value: 189
    },
    {
      name: "4",
      value: 177
    },
    {
      name: "5",
      value: 179
    },
    {
      name: "6",
      value: 179
    },
    {
      name: "7",
      value: 185
    },
    {
      name: "8",
      value: 185
    },
    {
      name: "9",
      value: 185
    },
    {
      name: "10",
      value: 178
    },

    {
      name: "11",
      value: 176
    },

    {
      name: "12",
      value: 184
    },
  ];

  return (
    <div className="Line_Wrap">
      <h3>체류시간</h3>
      <GraphJejuBefore colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}