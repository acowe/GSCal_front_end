import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import Home from "./Home";
import OtherPage from "./OtherPage";
import NoPage from "./NoPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/gscal_home"} element={<Home />}/>
            <Route path={"/gscal_front_end"} element={<Home />}/>
            <Route path={"/gscal_wk_overview"} element={<OtherPage />}/>
            <Route path={"*"} element={<NoPage />} />
        </Routes>
    </div>
  );
}

export default App;
