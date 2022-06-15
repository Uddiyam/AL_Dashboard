import "../grap.css";
import GangwonBar_After from "../BarChart/GangwonBar_After";
import GangwonSearch2 from "./data/GangwonSearch2";
import GangwonVisit2 from "./data/GangwonVisit2";

export default function GangwonTotal2() {
  return (
    <>
      <div className="grap">
        <GangwonSearch2 />
      </div>
      <div className="grap">
        <GangwonVisit2 />
      </div>
      <div className="box">
        <GangwonBar_After />
      </div>
    </>
  );
}
