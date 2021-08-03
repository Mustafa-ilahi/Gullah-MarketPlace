import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './views/Home';
import Router from './config/router'
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
