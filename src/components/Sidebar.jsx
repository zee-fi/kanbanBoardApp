import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [query, setQuery] = useState(""); //store the value in the search

  // prevent from infinte callbacks
  useEffect(() => {
    props.callBackToSerch(query);
  }, [query]); //call the function only when query value changes

  return (
    <div className="SidebarComponent">
      <Link to="/createTask">
        <img src="/images/plus.png" alt="+" id="plusSign" />
      </Link>
      <input
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)} // store value in state
        type="search"
        value={query}
      ></input>
      <Link to="/">Home</Link>
      <Link to="./about">About</Link>
    </div>
  );
}

export default Sidebar;
