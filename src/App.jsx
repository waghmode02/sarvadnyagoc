import React from 'react';
import { Helmet } from 'react-helmet';
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
import Table from './components/Table';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Sarvadnya Group of Construction - Leading Construction Company</title>
        <meta name="description" content="Sarvadnya Group of Construction in Nanded offers top-quality residential and commercial construction services, including home building, renovation, and property development." />
        <meta name="keywords" content="Sarvadnya Group of Construction, construction company Nanded, building contractors Nanded, residential construction Nanded, commercial construction Nanded, renovation services Nanded, home builders Nanded, civil engineering Nanded, property development Nanded" />
      </Helmet>
      <Header />
      <WhatsAppIcon />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            <Helmet>
              <title>Sarvadnya Group of Construction - Home</title>
              <meta name="description" content="Welcome to Sarvadnya Group of Construction. We specialize in providing high-quality construction services in Nanded, including residential and commercial projects." />
              <meta name="keywords" content="home construction Nanded, construction services Nanded, Sarvadnya Group" />
            </Helmet>
            <Page />
          </>
        } />
        <Route path="/about" element={
          <>
            <Helmet>
              <title>About Us - Sarvadnya Group of Construction</title>
              <meta name="description" content="Learn more about Sarvadnya Group of Construction, our mission, vision, and the team behind our successful construction projects in Nanded." />
              <meta name="keywords" content="about us Sarvadnya Group, construction company Nanded, our team, company mission" />
            </Helmet>
            <AboutUs />
          </>
        } />
        <Route path="/portfolio" element={
          <>
            <Helmet>
              <title>Portfolio - Sarvadnya Group of Construction</title>
              <meta name="description" content="Explore the portfolio of Sarvadnya Group of Construction. See our completed residential and commercial projects in Nanded and get inspired for your next project." />
              <meta name="keywords" content="construction portfolio Nanded, completed projects, residential construction, commercial construction" />
            </Helmet>
            <Portfolio />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Helmet>
              <title>Contact Us - Sarvadnya Group of Construction</title>
              <meta name="description" content="Get in touch with Sarvadnya Group of Construction in Nanded for all your construction needs. Contact us for quotes, consultations, and project inquiries." />
              <meta name="keywords" content="contact Sarvadnya Group, construction inquiries Nanded, request a quote, contact construction company" />
            </Helmet>
            <ContactUs />
          </>
        } />
        <Route path="/admin" element={
          <>
            <Helmet>
              <title>Admin - Sarvadnya Group of Construction</title>
              <meta name="description" content="Admin dashboard for Sarvadnya Group of Construction. Manage construction projects, view reports, and update company information." />
              <meta name="keywords" content="admin dashboard, construction project management, Sarvadnya Group admin" />
            </Helmet>
            <Table />
          </>
        } />
      </Routes>
      <Footers />
    </Router>
  );
}

export default App;
