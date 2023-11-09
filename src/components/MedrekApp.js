import React from 'react';
import '../style-home.css'; // Asumsikan ini adalah lokasi file CSS Anda






// Gunakan doctorImage dalam komponen Anda


// Komponen untuk Header
const Header = () => (
  <div className="header">
    <img src="img/frame.png" className="img-profile" alt="Profile" />
    <div className="greeting">
      <p className="hello">Selamat Pagi,</p>
      <h3>Rizal Jalaludin</h3>
    </div>
    <div className="notification">
      <img src="{notifikasiIcon}" alt="Notifikasi" />
    </div>
  </div>
);

// Komponen untuk Search
const Search = () => (
  <div className="search">
    <input type="text" placeholder="Cari" />
  </div>
);

// Komponen untuk MenuItem
const MenuItem = ({ icon, text }) => (
  <div className="menu-item">
    {icon}
    <span>{text}</span>
  </div>
);

// Komponen untuk Menu
const Menu = () => (
  <div className="menu">
    {/* Anda harus mengganti SVG inline dengan komponen atau gambar yang sesuai */}
    <MenuItem icon={<svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10 12H14M12 10V14M12 6.00002C14.941 6.00002 17.685 6.84702 20 8.31002L18 18H6L4 8.30902C6.39374 6.79627 9.16833 5.99546 12 6.00002Z" stroke="#D41F13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></svg>} text="Jadwal" />
    <MenuItem icon={<svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V9.5C3 10.9587 3.57946 12.3576 4.61091 13.3891C5.64236 14.4205 7.04131 15 8.5 15C9.95869 15 11.3576 14.4205 12.3891 13.3891C13.4205 12.3576 14 10.9587 14 9.5V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H11M8 15C8 15.7879 8.15519 16.5681 8.45672 17.2961C8.75825 18.0241 9.20021 18.6855 9.75736 19.2426C10.3145 19.7998 10.9759 20.2417 11.7039 20.5433C12.4319 20.8448 13.2121 21 14 21C14.7879 21 15.5681 20.8448 16.2961 20.5433C17.0241 20.2417 17.6855 19.7998 18.2426 19.2426C18.7998 18.6855 19.2417 18.0241 19.5433 17.2961C19.8448 16.5681 20 15.7879 20 15V12M20 12C19.4696 12 18.9609 11.7893 18.5858 11.4142C18.2107 11.0391 18 10.5304 18 10C18 9.46957 18.2107 8.96086 18.5858 8.58579C18.9609 8.21071 19.4696 8 20 8C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10C22 10.5304 21.7893 11.0391 21.4142 11.4142C21.0391 11.7893 20.5304 12 20 12ZM11 3V5M6 3V5" stroke="#D41F13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></svg>} text="Konsultasi" />
    <MenuItem icon={<svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 19H22M19 16V22M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke="#D41F13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></svg>} text="Booking" />
    <MenuItem icon={<svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9H12.01M11 12H12V16H13M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#D41F13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></svg>} text="Literasi" />
  </div>
);

// Komponen untuk MedicalCheck
const MedicalCheck = () => (
  <div className="medical-check">
    <img src="img/banner.jpg" alt="Dokter" />
  </div>
);

// Komponen untuk Poliklinik
const Poliklinik = () => (
  <div className="poliklinik">
    <div className="jeda">
      <h3>Poliklinik</h3>
      <p className="p">Lihat Semua</p>
    </div>
    {/* Sisanya akan diisi dengan elemen-elemen poliklinik */}
  </div>
);

// Komponen untuk dokter
const Doctor = ({ image, name, specialty }) => (
  <div className="doctor">
    <img src={image} alt={name} />
    <h2 className="nama">{name}</h2>
    <p className="skill">{specialty}</p>
  </div>
);

// Komponen untuk daftar dokter
const Doctors = () => (
  <div className="doctors">
    <Doctor image="img/daftar-dokter/Frame 15.png" name="dr. Nindya Puspita Ayu" specialty="Dokter Gigi" />
    {/* Sisanya akan diisi dengan daftar dokter lain */}
  </div>
);

// Komponen utama
const MedrekApp = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Menu />
      <MedicalCheck />
      <Poliklinik />
      <Doctors />
      {/* Sisanya dari komponen akan diisi di sini */}
    </div>
  );
};

export default MedrekApp;
