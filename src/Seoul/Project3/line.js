import React, { useState, useEffect, useRef } from "react";
import {Graph} from "./LineChart";

export default function Line() {
  const [colors, setColors]=useState(['gray','blue']);
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
      <div style={{color:colors[0], fontSize:'5px'}}><button onClick={prev}>-</button>코로나 전</div>
      <div style={{color:colors[1], fontSize:'5px'}}><button onClick={next}>-</button>코로나 후</div>
      <Graph colors={colors} data1={data1} data2={data2}/>
    </div>
  );
}
