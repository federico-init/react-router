// import React hooks
import { useState } from "react";

// import Router
import { Link, useParams } from "react-router-dom";

// import mocks
import { roomList } from "../../mocks/reservation.js";

// import style
// TBD

export default function Location() {
  const params = useParams();
  console.log(roomList[params.id - 1]);

  return (
    <div className="Location">
      <h1>{locationData.title}</h1>
      <Link to="/locations">
        <button>Back</button>
      </Link>
    </div>
  );
}
