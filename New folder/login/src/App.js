import logo from "./logo.svg";
import "./App.css";
import Register from "./components/Register.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Login from "./components/Login.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;