import * as React from "react";
import "./App.min.css";
import { GoogleFont, TypographyStyle } from "react-typography";
import typography from "../src/utils/typography";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { Topbar } from "./components/Topbar";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />

          <div className="entire-page">
            <Topbar />
            <div className="page-contents">
              <Sidebar />
              <Main />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
