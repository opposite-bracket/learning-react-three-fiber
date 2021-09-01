import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Canvas } from '@react-three/fiber';
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
            <Canvas style={{backgroundColor: 'black'}}>
              <SimpleBox />
            </Canvas>
          </Route>
          <Route path="/examples/axes-helper">
            <Canvas style={{backgroundColor: 'black'}}>
              <AxesHelper />
            </Canvas>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
