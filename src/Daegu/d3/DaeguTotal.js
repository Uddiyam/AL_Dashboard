import DaeguSearch from "./before/search/DaeguSearch"
import DaeguVisit from "./before/visit/DaeguVisit";
import "../../grap.css";
import DaeguBar from "../../BarChart/DaeguBar";

export default function DaeguTotal() {
    return (
        <>
        <div className="grap">
          <DaeguSearch />
        </div>
        <div className="grap">
          <DaeguVisit />
        </div>
        <div className="box">
          <DaeguBar />
        </div>
      </>
    );
}