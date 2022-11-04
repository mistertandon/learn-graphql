import { Link } from "react-router-dom";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
        </ul>
      </nav>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
