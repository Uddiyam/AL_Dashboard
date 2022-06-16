import BusanBar from "../../BarChart/BusanBar";
import "../../grap.css";
import BusanSearch from "./data/BusanSearch";
import BusanVisit from "./data/BusanVisit";

export default function BusanTotal() {
  return (
    <>
      <div className="grap">
        <BusanSearch />
      </div>
      <div className="grap">
        <BusanVisit />
      </div>
      <div className="box">
        <BusanBar />
      </div>
    </>
  );
}
