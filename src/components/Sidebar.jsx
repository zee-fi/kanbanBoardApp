import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="./about">About</Link>
    </>
  );
}

export default Sidebar;
