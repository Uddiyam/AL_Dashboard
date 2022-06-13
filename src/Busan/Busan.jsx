import React from "react";
import KoreaMap from "../KoreaMap";
import Line_busan from "./Line_Busan";
import "../grap.css";
import BusanLine from "./BusanLine";

export default function Busan() {
  return (
    <>
      {" "}
      <KoreaMap />
      <Line_busan />
      <BusanLine />
    </>
  );
}
