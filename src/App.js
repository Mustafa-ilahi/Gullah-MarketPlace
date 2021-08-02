import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Router from './config/router'
import Dashboard from './views/Dashboard';
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
