import CountryBeforeTable from "../table/before/CountryBeforeTable";
import CountryBefore from "./CountryBefore";
import "../../grap.css";



export default function CountryTotal() {
    return (
      <div>
        <div className="country_grap"><CountryBefore /></div>
        <div className="box"><CountryBeforeTable /></div>
      </div>
    );
  }