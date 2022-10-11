import Navbar from "./component/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Routes, link, Route } from "react-router-dom";
import Menupage from "./Menupage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menupage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
