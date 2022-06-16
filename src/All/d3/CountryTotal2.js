import React, { useState } from "react";
import CountrySearch2 from "./data/CountrySearch2";
import CountryVisit2 from "./data/CountryVisit2";
import "../../grap.css";

export default function CountryTotal2() {
  return (
    <>
      <div><CountrySearch2 /></div>
      <div><CountryVisit2 /></div>
    </>
  );
}
