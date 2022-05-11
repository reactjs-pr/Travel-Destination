import "./tour.css";
import { Link } from "react-router-dom";
function Tour(props) {
  return (
    <>
        <Link to={`city/${props.id}`}>
      <div className="tours-section">
        <p>{props.name}</p>

          <img src={props.image} alt="SSSS" />
      </div>
        </Link>
    </>
  );
}
export default Tour;
