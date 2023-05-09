import logo from "./logo.svg";
import "./nav.css";
function Nav() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>
      <input type="text" id="search" placeholder="search" />
      <ul>
        <li className="item home">Home</li>
        <li className="item">About us</li>
        <li className="item">contact us</li>
        <li className="item">Email us</li>
      </ul>
    </nav>
  );
}
export default Nav;
