import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./Page/Home";
import Users from "./Page/Users";
import About from "./Page/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;