
import React, { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);

  // Wrap setProgress with useCallback for optimization
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
          element={<News setProgress={handleSetProgress} country="us" category="general" />}
        />
        <Route
          path="/general"
          element={<News setProgress={handleSetProgress} country="us" category="general" />}
        />
        <Route
          path="/business"
          element={<News setProgress={handleSetProgress} country="us" category="business" />}
        />
        <Route
          path="/entertainment"
          element={<News setProgress={handleSetProgress} country="us" category="entertainment" />}
        />
        <Route
          path="/health"
          element={<News setProgress={handleSetProgress} country="us" category="health" />}
        />
        <Route
          path="/science"
          element={<News setProgress={handleSetProgress} country="us" category="science" />}
        />
        <Route
          path="/sports"
          element={<News setProgress={handleSetProgress} country="us" category="sports" />}
        />
        <Route
          path="/technology"
          element={<News setProgress={handleSetProgress} country="us" category="technology" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


