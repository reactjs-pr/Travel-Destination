import { Link } from "react-router-dom";
function Navbar()
{



return (

<>
<nav>
    <Link to path="/"> Home</Link>
    <Link to path="/city/:id"> detaios</Link>
</nav>
</>



)


}

export default Navbar;