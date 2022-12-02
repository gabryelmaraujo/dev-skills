import React, {useState} from 'react';

import GlobalStyles from './styles/global';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

function App() {

  const [newUser, setNewUser] = useState()

  return (
    <div className="App">
      <GlobalStyles/>

      <main className='appMain'>
      {/* <LoginPage/> */}

      <RegisterPage newUser={newUser} setNewUser={setNewUser}/>

      {/* <MainPage/> */}

      </main>

    </div>
  );
}

export default App;
