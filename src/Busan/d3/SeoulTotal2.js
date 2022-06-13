import SeoulSearch2 from "./after/search/SeoulSearch2";
import SeoulVisit2 from "./after/visit/SeoulVisit2";
import "../../grap.css";
import SeoulAfterTable from "../table/after/SeoulAfterTable";

export default function SeoulTotal2() {
    return (
        <div>
      <div className="grap">
        <SeoulSearch2 />
      </div>
      <div className="grap">
        <SeoulVisit2 />
      </div>
      <div className="box">
        <SeoulAfterTable />
      </div>
    </div>
    );
}