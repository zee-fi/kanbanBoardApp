import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="SidebarComponent">
      <Link to="/createTask">
        <img src="/images/plus.png" alt="+" id="plusSign" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="./about">About</Link>
    </div>
  );
}

export default Sidebar;
