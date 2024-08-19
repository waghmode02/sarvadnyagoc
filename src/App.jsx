import './App.css';
import Header from './components/Header';
import Page from "./components/Page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footers from "./components/Footers";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import WhatsAppIcon from './components/WhatsAppIcon';
import Portfolio from './components/Portfolio';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Header />
      <WhatsAppIcon />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
