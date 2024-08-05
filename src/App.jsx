import './App.css';
import Header from './components/Header';
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footers from "./components/Footers.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
