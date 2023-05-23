import * as React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-blue-600">Hello World</h1>
      </div>
    );
  }
}

root.render(<App />);
