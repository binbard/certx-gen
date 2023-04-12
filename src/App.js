import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import DashEvents from "./components/DashEvents";

function MRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} >
                <Route path="events" element={<DashEvents />} />
                <Route path="settings" element={<DashEvents />} />
            </Route>
        </Routes>
    );
}

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <br />
            <MRouter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;