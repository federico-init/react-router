// import Router
import { Link, Outlet } from "react-router-dom";

// import style
import "./App.scss";

function App() {
  return (
    <>
      <nav className="navbar">
        <h3 className="title">React Rental Room</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact Us</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
