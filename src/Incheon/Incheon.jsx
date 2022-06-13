import React from "react";
import KoreaMap from "../KoreaMap";
import "../grap.css";
import Line_incheon from "./Line_incheon";
import IncheonLine from "./IncheonLine";

export default function Incheon() {
  return (
    <>
      <KoreaMap />
      <Line_incheon />
      <IncheonLine />
    </>
  );
}
