// import Router
import { Link, useParams } from "react-router-dom";

// import mocks
import { roomList } from "../../mocks/reservation.js";

// import style
import styles from "./../../styles/routes/Locations.module.scss";

export default function Location() {
  const params = useParams();

  const data = roomList[params.id - 1];

  return (
    <div className="Locations">
      <h1>{data.name}</h1>
      <Link to="/locations">
        <button className={styles.button}>Back</button>
      </Link>
    </div>
  );
}
