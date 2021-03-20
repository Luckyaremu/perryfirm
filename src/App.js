import './App.css';
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Sidebar />
     <Navbar/>
    </Router>
  );
}

export default App;
