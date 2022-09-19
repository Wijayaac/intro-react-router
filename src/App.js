import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Header } from "./components/layouts/Header";

import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { EmployeeDetail } from "./pages/Employee";

import { employee } from "./data";

import "./App.css";
// dashboard
// show list of employees
// name
// id
// jobTitle
// description

// about
// info about the company

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard employee={employee} />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
