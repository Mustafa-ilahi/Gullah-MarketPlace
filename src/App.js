import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Gullah MarketPlace</h1> */}
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
