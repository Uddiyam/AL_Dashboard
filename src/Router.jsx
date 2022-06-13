import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Busan from "./Busan/Busan";
import Seoul from "./Seoul/Seoul";
import Daegu from "./Daegu/Daegu";
import Gangwon from "./Gangwon/Gangwon";
import Gyeonggi from "./Gyeonggi/Gyeonggi";
import Incheon from "./Incheon/Incheon";
import Jeju from "./Jeju/Jeju";
import KoreaAll from "./All/KoreaAll";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <>
            <Route exact path="/" element={<KoreaAll />} />
            <Route exact path="/Seoul" element={<Seoul />} />
            <Route exact path="/Busan" element={<Busan />} />
            <Route exact path="/Daegu" element={<Daegu />} />
            <Route exact path="/Gangwon" element={<Gangwon />} />
            <Route exact path="/Gyeonggi" element={<Gyeonggi />} />
            <Route exact path="/Incheon" element={<Incheon />} />
            <Route exact path="/Jeju" element={<Jeju />} />
          </>
        </Routes>
      </Router>
    </>
  );
}
