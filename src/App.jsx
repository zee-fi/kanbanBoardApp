import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css'

function App() {

  return (
    <div id='mainDev'>
      <Navbar />
      <div className="sidebar">
      <Sidebar />
      
      </div>
      <Footer />

    </div>
  )
}

export default App
