import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MedrekApp from './components/MedrekApp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fungsi untuk mengatur status login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <MedrekApp />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
