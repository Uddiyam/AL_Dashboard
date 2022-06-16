import React, { useState } from "react";
import CountrySearch from "./data/CountrySearch";
import CountryVisit from "./data/CountryVisit";
import "../../grap.css";

export default function CountryTotal() {
  return (
    <>
      <div><CountrySearch /></div>
      <div><CountryVisit /></div>
    </>
  );
}
