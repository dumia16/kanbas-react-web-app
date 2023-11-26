// import logo from './logo.svg';
import "./App.css";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Assignment3 from "./Labs/a3";
import Assignment4 from "./Labs/a4";
import Assignment5 from "./Labs/a5";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Labs/store";
import Project from "./Project";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>learn</div>

    // <HashRouter>
    //        <div>
    //            <HelloWorld/>
    //            <Labs/>
    //            <Kanbas/>
    //        </div>
    //    </HashRouter>

    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/hello" />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/Labs/a3/*" element={<Assignment3 />} />
            <Route path="/Labs/a4/*" element={<Assignment4 />} />
            <Route path="/Labs/a5/*" element={<Assignment5 />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/project/*" element={<Project />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
