import "./App.scss";
import Radio from "./Pages/Radio/Radio";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Radio" element={<Radio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
