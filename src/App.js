import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const handleSetProgress = useCallback((progressValue) => {
    setProgress(progressValue);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route
          path="/"
          element={<News setProgress={handleSetProgress} country="in" category="general" />}
        />
        <Route
          path="/general"
          element={<News setProgress={handleSetProgress} country="in" category="general" />}
        />
        <Route
          path="/business"
          element={<News setProgress={handleSetProgress} country="in" category="business" />}
        />
        <Route
          path="/entertainment"
          element={<News setProgress={handleSetProgress} country="in" category="entertainment" />}
        />
        <Route
          path="/health"
          element={<News setProgress={handleSetProgress} country="in" category="health" />}
        />
        <Route
          path="/science"
          element={<News setProgress={handleSetProgress} country="in" category="science" />}
        />
        <Route
          path="/sports"
          element={<News setProgress={handleSetProgress} country="in" category="sports" />}
        />
        <Route
          path="/technology"
          element={<News setProgress={handleSetProgress} country="in" category="technology" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


