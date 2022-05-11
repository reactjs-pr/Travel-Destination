import { Link } from "react-router-dom";

function Navbar()
{



return (

<>
<nav>
                <Link to="/"> Home</Link>
            </nav>

            <nav>
                <Link to="/city/:id"> TourDetails </Link>
            </nav>

</>



)


}

export default Navbar;