// import Router
import { useNavigate } from "react-router-dom";

// import mocks
import { roomList } from "../../mocks/reservation.js";

// import style
// TBD

export default function () {
  const navigate = useNavigate();

  // dichiaro una funzione per il routing alla singola location
  const onHandleClick = (id) => navigate(`/locations/${id}`);
  const renderLocations = () =>
    roomList.map(
      ({
        id,
        name,
        description,
        imageLocation,
        location,
        price,
        availability,
        rating,
      }) => (
        <div key={id} onClick={() => onHandleClick(id)}>
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{location}</p>
            <p>{rating}</p>
            <p>{price}</p>
            <p>{availability}</p>
            <br />
          </div>
          <img src={imageLocation} alt={name} />
        </div>
      )
    );

  return (
    <div className="Locations">{roomList.length ? renderLocations() : ""}</div>
  );
}
