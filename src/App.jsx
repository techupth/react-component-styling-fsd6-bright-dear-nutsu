// src/App.jsx
import "./App.css";
import * as React from "react";
import Button from "./component/button.jsx";
import Alert from "./component/alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="error" />
        <Button type="success" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="alert-error" />
        <Alert type="alert-warning" />
        <Alert type="alert-info" />
        <Alert type="alert-success" />
      </div>
    </div>
  );
}

export default App;
