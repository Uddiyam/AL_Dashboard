import "../../grap.css";
import BusanBar_After from "../../BarChart/BusanBar_After";
import BusanSearch2 from "./data/BusanSearch2";
import BusanVisit2 from "./data/BusanVisit2";

export default function BusanTotal2() {
  return (
    <>
      <div className="grap">
        <BusanSearch2 />
      </div>
      <div className="grap">
        <BusanVisit2 />
      </div>
      <div className="box">
        <BusanBar_After />
      </div>
    </>
  );
}
