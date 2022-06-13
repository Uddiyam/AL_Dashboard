import SeoulSearch from "./before/search/SeoulSearch";
import SeoulVisit from "./before/visit/SeoulVisit";
import "../../grap.css";
import SeoulBar from "../../BarChart/SeoulBar";

export default function SeoulTotal() {
  return (
    <>
      <div className="grap">
        <SeoulSearch />
      </div>
      <div className="grap">
        <SeoulVisit />
      </div>
      <div className="box">
        <SeoulBar />
      </div>
    </>
  );
}
