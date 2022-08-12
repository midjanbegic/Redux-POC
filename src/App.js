import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <div>
      {" "}
      <div className="gpt3__navbar-links_logo">
        <img src="logo.png" width={50} height={50} align="right" />
        <h2>First-Redux-Project</h2>
      </div>
      <div className="App">
        <Profile />
        <Login />
        <ChangeColor />
      </div>
    </div>
  );
}

export default App;
