// import Router
import { Link } from "react-router-dom";

// import style
import "./../styles/routes/error.scss";

export default function Error() {
  return (
    <>
      <h1>404 NOT FOUND 😥</h1>
      <p>We're sorry, this ugly error page is currently under maintenance</p>
      <Link to="/">Return to Home</Link>
    </>
  );
}
