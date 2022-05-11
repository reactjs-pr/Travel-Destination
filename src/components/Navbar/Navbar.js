import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/"> Home</Link>
      </nav>
    </>
  );
}

export default Navbar;
