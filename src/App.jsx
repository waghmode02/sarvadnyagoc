import './App.css';
import Header from './components/Header';
import Page from "./components/Page.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footers from "./components/Footers.jsx";
import AboutUs from "./components/AboutUs.jsx"
import ContactUs from "./components/ContactUs.jsx"
import WhatsAppIcon from './components/WhatsAppIcon';

function App() {
  return (
    <Router>
      <Header />
      <WhatsAppIcon />
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
