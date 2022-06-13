import React, { useState } from "react";
import CountrySearch2 from "./after/search/CountrySearch2";
import CountryVisit2 from "./after/visit/CountryVisit2";
import "../../grap.css";

export default function CountryTotal2() {
  return (
    <>
      <div><CountrySearch2 /></div>
      <div><CountryVisit2 /></div>
    </>
  );
}
