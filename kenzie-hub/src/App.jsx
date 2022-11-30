import React, {useState} from 'react';

import GlobalStyles from './styles/global';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>

      <main className='appMain'>
      {/* <LoginPage/> */}

      <RegisterPage/>

      </main>

    </div>
  );
}

export default App;
