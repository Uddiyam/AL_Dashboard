import "../grap.css";
import GangwonBar from "../BarChart/GangwonBar";
import GangwonSearch from "./data/GangwonSearch";
import GangwonVisit from "./data/GangwonVisit";

export default function GangwonTotal() {
  return (
    <>
      <div className="grap">
        <GangwonSearch />
      </div>
      <div className="grap">
        <GangwonVisit />
      </div>
      <div className="box">
        <GangwonBar />
      </div>
    </>
  );
}
