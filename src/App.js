import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import PropertyPage from "./components/propertyPage"; // Create this component to display property details

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route to the property page with the property ID */}
          <Route path="/properties/:id" element={<PropertyPage />} />
          {/* Render the Body component for other routes */}
          <Route path="/" element={<Body />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
