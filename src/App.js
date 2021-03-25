import './App.css';
import Home from "./pages";
import contact from "./pages/contact";
import Footer from "./component/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
      <Route path="/" component={Home} exact />
        <Route path="/contact" component={contact} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
