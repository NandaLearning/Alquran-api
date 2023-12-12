import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import ListSurah from "./Page/ListSurah";
import Settings from "./Page/Settings";
import IsiSurah from "./Page/IsiSurah";
import SolatTime from "./Page/SolatTime";
import ListWaktuSolat from "./Page/ListWaktuSolat";

const App = () => {

  return (
    <div className=" bg-latar min-h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solattime" element={<SolatTime />} />
          <Route path="/listwaktusolat" element={<ListWaktuSolat />} />
          <Route path="/listsurah" element={<ListSurah />} />
          <Route path="/isisurah/:id" element={<IsiSurah />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
