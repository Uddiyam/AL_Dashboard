import React, { useState, useEffect, useRef } from "react";
import {GraphBusanBefore} from "./LineChart";

export default function BusanBefore() {
  const [colors, setColors]=useState(['red','gray']);
  const data1 = [
    {
      name: "1",
      value: 167
    },
    {
      name: "2",
      value: 181
    },
    {
      name: "3",
      value: 170
    },
    {
      name: "4",
      value: 160
    },
    {
      name: "5",
      value: 162
    },
    {
      name: "6",
      value: 161
    },
    {
      name: "7",
      value: 170
    },
    {
      name: "8",
      value: 167
    },
    {
      name: "9",
      value: 179
    },
    {
      name: "10",
      value: 157
    },

    {
      name: "11",
      value: 160
    },

    {
      name: "12",
      value: 164
    },
  ];
  const data2 = [
    {
      name: "1",
      value: 177
    },
    {
      name: "2",
      value: 179
    },
    {
      name: "3",
      value: 168
    },
    {
      name: "4",
      value: 160
    },
    {
      name: "5",
      value: 163
    },
    {
      name: "6",
      value: 159
    },
    {
      name: "7",
      value: 165
    },
    {
      name: "8",
      value: 169
    },
    {
      name: "9",
      value: 176
    },
    {
      name: "10",
      value: 158
    },

    {
      name: "11",
      value: 159
    },

    {
      name: "12",
      value: 165
    },
  ];

  return (
    <div className="Line_Wrap">
      <h3>체류시간</h3>
      <GraphBusanBefore colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}