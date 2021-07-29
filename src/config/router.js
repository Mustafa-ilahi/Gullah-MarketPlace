import {
    BrowserRouter as Router, //alias
    Switch,
    Route
  } from "react-router-dom"
  import Login from '../components/Login'
  import SignUp from '../components/SignUp'
  import Dashboard from '../views/Dashboard'
  
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
            <Route path="/dashboard">
              <Dashboard />
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