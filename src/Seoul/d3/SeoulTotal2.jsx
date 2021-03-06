import SeoulSearch2 from "./SeoulSearch2";
import SeoulVisit2 from "./SeoulVisit2";
import "../../grap.css";
import SeoulBar_After from "../../BarChart/SeoulBar_After";

export default function SeoulTotal2() {
  return (
    <>
      <div className="grap">
        <SeoulSearch2 />
      </div>
      <div className="grap">
        <SeoulVisit2 />
      </div>
      <div className="box">
        <SeoulBar_After />
      </div>
    </>
  );
}
