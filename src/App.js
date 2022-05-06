import React, {Suspense} from "react";
import "./App.css";

import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Home from "./components/Home";
import Header from "./components/NavBar/Header";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

const Taxi = React.lazy(() => import ('./components/Taxi/Taxi'));
const Services = React.lazy(() => import('./components/Services/Services'));
const Contact = React.lazy(() => import('./components/Contact/Contact'))

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div><LoadingSpinner /></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
