import React, { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from "./styles/global";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <GlobalStyles />

      <main className="appMain">
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="register" element={<RegisterPage />} />

          <Route path="dashboard" element={<MainPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
