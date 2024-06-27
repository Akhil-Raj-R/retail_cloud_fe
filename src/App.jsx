import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Registerpage";
import Homepage from "./components/Homepage";
import Registerform from "./components/Form";
import { Viewemp } from "./components/Viewemp";
import { Viewdep } from "./components/Viewdep";
import Tests from "./components/Tests";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addemployee" element={<Registerform />} />
        <Route path="/logout" element={<Homepage />} />
        <Route path="/viewallEmp" element={<Viewemp />} />
        <Route path="/viewallDep" element={<Viewdep />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
    </Router>
  );
}

export default App;
