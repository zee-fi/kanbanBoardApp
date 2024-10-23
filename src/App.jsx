import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";
import Kanban from "./components/Kanban";

function App() {
  return (
    <div id="mainDev">
      <Navbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <div>
          <Kanban />
      </div>
      <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
