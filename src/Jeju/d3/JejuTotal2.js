import "../../grap.css";
import JejuBar_After from "../../BarChart/JejuBar_After";
import JejuSearch2 from "./data/JejuSearch2";
import JejuVisit2 from "./data/JejuVisit2";

export default function JejuTotal2() {
  return (
    <>
      <div className="grap">
        <JejuSearch2 />
      </div>
      <div className="grap">
        <JejuVisit2 />
      </div>
      <div className="box">
        <JejuBar_After />
      </div>
    </>
  );
}
