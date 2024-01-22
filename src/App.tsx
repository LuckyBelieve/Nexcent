import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Clients from "./pages/Clients";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home/>
        <Clients/>
      </div>
    </Router>
  );
}

export default App;
