import DaeguSearch2 from "./after/search/DaeguSearch2"
import DaeguVisit2 from "./after/visit/DaeguVisit2";
import "../../grap.css";
import DaeguBar_After from "../../BarChart/DaeguBar_After";

export default function DaeguTotal() {
    return (
        <>
        <div className="grap">
          <DaeguSearch2 />
        </div>
        <div className="grap">
          <DaeguVisit2 />
        </div>
        <div className="box">
          <DaeguBar_After />
        </div>
      </>
    );
}