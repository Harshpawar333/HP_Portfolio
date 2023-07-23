import "./header.css";
import logo from "./logo.png";


function Header() {
  return (
    <div>
      <nav className="header">
        <a href="/" className="headerlogo">
          <img src={logo} alt="logo" />
          HARSHVARDHAN PAWAR
        </a>
        <ul>
          <li>
            <a className="headerlogo" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="headerlogo" href="/">
              Passion
            </a>
          </li>

          <li>
            <a className="headerlogo" href="/about">
              Experience
            </a>
          </li>
          <li>
            <a className="headerlogo" href="/about">
              work
            </a>
          </li>
          <li>
            <a className="headerlogo" href="/about">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
