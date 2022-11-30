import React, {useState} from 'react';

import GlobalStyles from './styles/global';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>

      <main className='appMain'>
      <LoginPage/>

      </main>

    </div>
  );
}

export default App;
