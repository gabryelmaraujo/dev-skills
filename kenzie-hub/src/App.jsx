import React, {useState} from 'react';

import { Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from './styles/global';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import { ToastContainer } from 'react-toastify';


function App() {

  const [loggedUser, setLoggedUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState("login")
  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <GlobalStyles/>

      <main className='appMain'>


        <Routes>
          <Route path='/' 
          element={
            <LoginPage loggedUser={loggedUser} setLoggedUser={setLoggedUser} loginStatus={loginStatus} setLoginStatus={setLoginStatus} page={page} setPage={setPage} />
          } />

          <Route path='register' 
          element={
            <RegisterPage page={page} setPage={setPage} />
          } />

          <Route path='dashboard' 
          element={
            <MainPage loggedUser={loggedUser} setLoggedUser={setLoggedUser} loginStatus={loginStatus} setLoginStatus={setLoginStatus} page={page} setPage={setPage} />
          } />

          <Route path='*' element={ <Navigate to="/" /> }/>
        </Routes>

      </main>

    </div>
  );
}

export default App;
