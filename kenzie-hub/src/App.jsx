import React, {useState} from 'react';

import GlobalStyles from './styles/global';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>

      <main className='appMain'>
      {/* <LoginPage/> */}

      <RegisterPage/>

      {/* <MainPage/> */}

      </main>

    </div>
  );
}

export default App;
