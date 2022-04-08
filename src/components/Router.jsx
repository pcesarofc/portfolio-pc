import React from "react";
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import { Routes, Route } from 'react-router-dom';

const Router = () => <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/*" element={<Home />} />
</Routes>

export default Router