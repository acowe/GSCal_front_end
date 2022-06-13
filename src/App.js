import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Home";
import OtherPage from "./OtherPage";
import NoPage from "./NoPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/home"} element={<Home />}/>
            <Route path={"/wk_overview"} element={<OtherPage />}/>
            <Route path={"*"} element={<Navigate to="/home"/>}/>
        </Routes>
    </div>
  );
}

export default App;
