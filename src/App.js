import './App.css';
import Home from "./pages";
import contact from "./pages/contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
