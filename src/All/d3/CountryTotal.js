import React, { useState } from "react";
import CountrySearch from "./before/search/CountrySearch";
import CountryVisit from "./before/visit/CountryVisit";
import "../../grap.css";

export default function CountryTotal() {
  return (
    <>
      <div><CountrySearch /></div>
      <div><CountryVisit /></div>
    </>
  );
}
