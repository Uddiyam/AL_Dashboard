import "../../grap.css";
import IncheonBar_After from "../../BarChart/IncheonBar_After";
import IncheonSearch2 from "./data/IncheonSearch2";
import IncheonVisit2 from "./data/IncheonVisit2";

export default function IncheonTotal2() {
  return (
    <>
      <div className="grap">
        <IncheonSearch2 />
      </div>
      <div className="grap">
        <IncheonVisit2 />
      </div>
      <div className="box">
        <IncheonBar_After />
      </div>
    </>
  );
}
