import IncheonBar from "../../BarChart/IncheonBar";
import "../../grap.css";
import IncheonSearch from "./data/IncheonSearch";
import IncheonVisit from "./data/IncheonVisit";

export default function IncheonTotal() {
  return (
    <>
      <div className="grap">
        <IncheonSearch />
      </div>
      <div className="grap">
        <IncheonVisit />
      </div>
      <div className="box">
        <IncheonBar />
      </div>
    </>
  );
}
