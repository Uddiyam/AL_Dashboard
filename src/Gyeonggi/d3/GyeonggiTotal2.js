import "../../grap.css";
import GyeonggiBar_After from "../../BarChart/GyeonggiBar_After";
import GyeonggiSearch2 from "./data/GyeonggiSearch2";
import GyeonggiVisit2 from "./data/GyeonggiVisit2";

export default function GyeonggiTotal2() {
  return (
    <>
      <div className="grap">
        <GyeonggiSearch2 />
      </div>
      <div className="grap">
        <GyeonggiVisit2 />
      </div>
      <div className="box">
        <GyeonggiBar_After />
      </div>
    </>
  );
}
