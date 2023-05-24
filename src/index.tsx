import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root"));

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

root.render(<App />);
