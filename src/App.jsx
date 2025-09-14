import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CoursesPage from "./pages/Courses";
import Login from "./pages/login";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";




function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<Login />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/pricing" element={<Pricing />} />
      <Route path="/courses" element={<CoursesPage />} />
     
    </Routes>
  );
}

export default App;
