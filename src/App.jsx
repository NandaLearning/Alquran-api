import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import ListSurah from "./Page/ListSurah";
import Settings from "./Page/Settings";
import IsiSurah from "./Page/IsiSurah";
import SolatTime from "./Page/SolatTime";
import ListWaktuSolat from "./Page/ListWaktuSolat";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const bgColor = isDarkMode ? "bg-slate-500" : "bg-latar";

  return (
    <div className={`min-h-screen ${bgColor}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solattime" element={<SolatTime />} />
          <Route path="/listwaktusolat" element={<ListWaktuSolat />} />
          <Route path="/listsurah" element={<ListSurah />} />
          <Route path="/isisurah/:id" element={<IsiSurah />} />
          <Route path="/settings" element={<Settings toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
