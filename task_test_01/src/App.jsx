import "./App.css";

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import About from "./Page/About";
import Home from "./Page/Home";
import Users from "./Page/Users";

function App() {
  const [page, setPage] = useState("home");

  let content;

  if (page === "about") {
    content = <About />;
  } else if (page === "users") {
    content = <Users />;
  } else {
    content = <Home />;
  }

  return (
    <div className="app-shell">
      <Sidebar currentPage={page} onNavigate={setPage} />
      {content}
    </div>
  );
}

export default App;
