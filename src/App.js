import React from 'react';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";

function App() {
  return (
      <Router>
          <Routes>
              <Route index element={<UseStateExample />} />
              <Route path="/useEffectExample" element={<UseEffectExample />} />
          </Routes>
      </Router>
  );
}

export default App;
