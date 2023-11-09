import React from 'react';
import '../App.css'; // Ini mengasumsikan bahwa file CSS berada dalam folder yang sama dengan komponen Anda

const Login = ({ onLogin }) => {
  return (
    <div className="login-container">
      <div className="logo">
        {/* Pastikan path ke gambar Anda benar */}
        <img src="logo1.png" alt="Pranadia Medika" />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Masukkan Email" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Masukkan Password" />
        {/* Anda mungkin ingin menambahkan logika untuk menampilkan password di sini */}
        <span className="eye-icon"></span>
      </div>

      <div className="forgot-password">
        <a href="#">Lupa Kata Sandi?</a>
      </div>

      <button className="btn-login" onClick={onLogin}>
        Login
      </button>

      <div className="register">
        Tidak punya akun? <a className="link" href="#">Daftar</a>
      </div>

      <div className="or-divider">Atau</div>

      <button className="btn-google">
        <img src="google.svg" alt="Google" /> Login dengan Google
      </button>
    </div>
  );
};

export default Login;
