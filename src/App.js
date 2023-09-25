import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FsToken from "./pages/FsToken";
import Intro from "./pages/Intro";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import useWindowSize from "./components/WindowSize";
import { useEffect, useState } from "react";
import UseCase from "./pages/UseCase";

function App() {
  const { width } = useWindowSize();
  const [widthh, setWidth] = useState(0);

  return (
    <Router>
      <Navbar width={width} widthh={widthh} setWidth={setWidth} />
      <Routes>
        <Route
          path="/"
          element={<Intro width={width} widthh={widthh} setWidth={setWidth} />}
        />
        <Route
          path="/fs-token"
          element={
            <FsToken width={width} widthh={widthh} setWidth={setWidth} />
          }
        />
        <Route
          path="/comunity"
          element={
            <Community width={width} widthh={widthh} setWidth={setWidth} />
          }
        />
        <Route
          path="/faq"
          element={<FAQ width={width} widthh={widthh} setWidth={setWidth} />}
        />
        <Route
          path="/contact"
          element={
            <Contact width={width} widthh={widthh} setWidth={setWidth} />
          }
        />
        <Route
          path="/usecase"
          element={
            <UseCase width={width} widthh={widthh} setWidth={setWidth} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
