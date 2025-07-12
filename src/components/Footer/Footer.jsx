import { Link } from "react-router-dom";
import StyledFooter from "./StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <div>
        <h1>Covid ID</h1>
        <p>Developed by mfiqridn</p>
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
    </StyledFooter>
  );
}

export default Footer;
