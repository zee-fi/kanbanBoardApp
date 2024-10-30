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
      <Link to="/createTask" className="creatTask">
        <img src="/images/plus.png" alt="+" id="plusSign" />
        <p>Create Task</p>
      </Link>

      <Link to="/">Home</Link>
      <Link to="./about">About</Link>
      <input
        className="search"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)} // store value in state
        type="search"
        value={query}
      ></input>
    </div>
  );
}

export default Sidebar;
