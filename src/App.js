import React from 'react';
import './App.css'; // This assumes that the CSS file is in the same folder as your component

const Login = () => {
  // Define your state and functions here

  return (
    <div className="login-container">
      <div className="logo">
        {/* Make sure the path to your image is correct */}
        <img src="logo1.png" alt="Pranadia Medika" />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Masukkan Email" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Masukkan Password" />
        {/* You might want to handle showing the password here */}
        <span className="eye-icon"></span>
      </div>

      <div className="forgot-password">
        <a href="#">Lupa Kata Sandi?</a>
      </div>

      <button className="btn-login">Login</button>

      <div className="register">
        Tidak punya akun? <a className="link" href="#">Daftar</a>
      </div>

      <div className="or-divider">
        Atau
      </div>

      <button className="btn-google">
        <img src="google.svg" alt="Google" /> Login dengan Google
      </button>
    </div>
  );
};

export default Login;
