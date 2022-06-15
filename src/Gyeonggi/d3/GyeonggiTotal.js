import GyeonggiBar from "../../BarChart/GyeonggiBar";
import "../../grap.css";
import GyeonggiSearch from "./data/GyeonggiSearch";
import GyeonggiVisit from "./data/GyeonggiVisit";

export default function GyeonggiTotal() {
  return (
    <>
      <div className="grap">
        <GyeonggiSearch />
      </div>
      <div className="grap">
        <GyeonggiVisit />
      </div>
      <div className="box">
        <GyeonggiBar />
      </div>
    </>
  );
}
