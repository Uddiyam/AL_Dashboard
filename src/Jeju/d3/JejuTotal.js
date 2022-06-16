import JejuBar from "../../BarChart/JejuBar";
import "../../grap.css";
import JejuSearch from "./data/JejuSearch";
import JejuVisit from "./data/JejuVisit";

export default function JejuTotal() {
  return (
    <>
      <div className="grap">
        <JejuSearch />
      </div>
      <div className="grap">
        <JejuVisit />
      </div>
      <div className="box">
        <JejuBar />
      </div>
    </>
  );
}
