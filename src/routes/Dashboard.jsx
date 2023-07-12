import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import styles from "../styles/routes/Dashboard.module.scss";

export default function Dashboard() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    !!setIsLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className={styles.Dashboard}>
      <h1>{`Welcome!`}</h1>
    </div>
  ) : (
    navigate("/login")
  );
}
