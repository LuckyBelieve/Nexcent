import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Community from "./pages/Community";
import Achievements from "./pages/Achievements";
import Updates from "./pages/Updates";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home/>
        <Clients/>
        <Community/>
        <Achievements/>
        <Updates/>
      </div>
    </Router>
  );
}

export default App;
