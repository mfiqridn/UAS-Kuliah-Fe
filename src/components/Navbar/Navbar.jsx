import StyledNavbar from "./StyledNavbar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/Indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/Province">Province</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
