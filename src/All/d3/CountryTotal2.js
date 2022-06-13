import CountryAfterTable from "../table/after/CountryAfterTable";
import CountryAfter from "./CountryAfter";
import "../../grap.css";



export default function CountryTotal2() {
    return (
      <div>
        <div className="country_grap"><CountryAfter /></div>
        <div className="box"><CountryAfterTable /></div>
      </div>
    );
  }