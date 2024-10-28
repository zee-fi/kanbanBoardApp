import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src="/images/logo.png" />
      </Link>
      <h1>Kanban Board</h1>
    </div>
  );
}

export default Navbar;
