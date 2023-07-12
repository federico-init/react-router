// import Router
import { Link, Outlet, useNavigate } from "react-router-dom";

// import style
import "./App.scss";

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Log out?")) localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <h3 className="title" onClick={() => navigate("/")}>
          React Rental Room
        </h3>
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
          {!!localStorage.getItem("auth") ? (
            <>
              <li>
                <Link to="/dashboard">
                  <i className="fa-solid fa-user"></i> User
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleLogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/dashboard">
                <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
