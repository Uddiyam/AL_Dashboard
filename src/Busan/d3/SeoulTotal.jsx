import SeoulSearch from "./before/search/SeoulSearch";
import SeoulVisit from "./before/visit/SeoulVisit";
import "../../grap.css";
import SeoulBeforeTable from "../table/before/SeoulBeforeTable";

export default function SeoulTotal() {
  return (
    <div>
      <div className="grap">
        <SeoulSearch />
      </div>
      <div className="grap">
        <SeoulVisit />
      </div>
      <div className="box">
        <SeoulBeforeTable />
      </div>
    </div>
  );
}
