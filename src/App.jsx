import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import ListSurah from "./Page/ListSurah";
import IsiSurah from "./Page/IsiSurah";

const App = () => {

  return (
    <div className=" bg-latar min-h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listsurah" element={<ListSurah />} />
          <Route path="/isisurah/:id" element={<IsiSurah />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
