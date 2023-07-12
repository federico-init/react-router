import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import styles from "../styles/routes/Login.module.scss";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // definisco uno stato per salvare gli utenti
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/7f885de34533fd8f892a")
      .then((res) => res.json())
      .then((data) => setUserData(data.users));
  }, []);

  // definisco le funzioni per salvarmi username e password inserite da utente
  const handleUsername = (e) => setUsername(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);

  // definisco il submit
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (
        !!userData.find(
          (user) => user.username === username && user.password === password
        )
      ) {
        const loggedUser = userData.find(
          (user) => user.username === username && user.password === password
        );
        localStorage.setItem("auth", JSON.stringify(loggedUser));
        navigate("/dashboard");
      } else {
        throw new Error("Wrong credentials! Please try again");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.Login}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={handleUsername}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={handlePassword}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
