import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SimpleBox from "./exercises/SimpleBox";
import AxesHelper from "./exercises/AxesHelper";
import NavBar from "./navigation/NavBar";

const App = () => {
  return (
    <Router>
      <div style={{height: '100vh', width: '100vw', backgroundColor: 'black', color: 'white'}}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            Hello
          </Route>
          <Route exact path="/examples/simple-box">
            <SimpleBox />
          </Route>
          <Route path="/examples/axes-helper">
            <AxesHelper />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
