import {
    BrowserRouter as Router, //alias
    Switch,
    Route
  } from "react-router-dom"
  import Login from '../components/Login'
  import SignUp from '../components/SignUp'
  import Home from '../views/Home'
  
  export default function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  /*
  
  1) Basic Routing
  2) Protected Routing
  3) Dynamic Routing
  */