import React, {useState} from 'react';

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import GlobalStyles from './styles/global';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';


function App() {

  const [loggedUser, setLoggedUser] = useState({})
  const [page, setPage] = useState("login")
  const [loginStatus, setLoginStatus] = useState(false)

  useEffect(()=>{}, [loginStatus])

  const navigate = useNavigate()

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
