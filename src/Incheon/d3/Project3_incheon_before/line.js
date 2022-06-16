import React, { useState, useEffect, useRef } from "react";
import {GraphIncheonBefore} from "./LineChart";

export default function IncheonBefore() {
  const [colors, setColors]=useState(['red','gray']);
  const data1 = [
    {
      name: "1",
      value: 194
    },
    {
      name: "2",
      value: 206
    },
    {
      name: "3",
      value: 199
    },
    {
      name: "4",
      value: 183
    },
    {
      name: "5",
      value: 187
    },
    {
      name: "6",
      value: 197
    },
    {
      name: "7",
      value: 200
    },
    {
      name: "8",
      value: 206
    },
    {
      name: "9",
      value: 206
    },
    {
      name: "10",
      value: 195
    },

    {
      name: "11",
      value: 194
    },

    {
      name: "12",
      value: 187
    },
  ];
  const data2 = [
    {
      name: "1",
      value: 204
    },
    {
      name: "2",
      value: 201
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
      value: 185
    },
    {
      name: "7",
      value: 194
    },
    {
      name: "8",
      value: 193
    },
    {
      name: "9",
      value: 194
    },
    {
      name: "10",
      value: 182
    },

    {
      name: "11",
      value: 186
    },

    {
      name: "12",
      value: 191
    },
  ];

  return (
    <div className="Line_Wrap">
      <h3>체류시간</h3>
      <GraphIncheonBefore colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}