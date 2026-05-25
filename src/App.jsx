import { useState } from 'react';
import './App.css';

function App() {
  const [role, setRole] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Şifre Kontrollü Giriş Fonksiyonu
  const handleLogin = () => {
    const user = document.querySelector('input[placeholder="Kullanıcı Adı"]').value;
    const pass = document.querySelector('input[type="password"]').value;

    // Örnek kontrol: Kullanıcı: admin, Şifre: 123
    if (user === 'admin' && pass === '123') {
      setIsLoggedIn(true);
    } else {
      alert("Hatalı kullanıcı adı veya şifre!");
    }
  };

  // Paneller (İçerik)
  const renderContent = () => {
    if (role === 'akademisyen') return (
      <div className="grid-container">
        <section className="card">
          <h3>Akademisyen Not Giriş Paneli</h3>
          <label>Ders Seçiniz</label>
          <select className="input-field"><option>Mobil Programlama</option><option>Veri Tabanı</option></select>
          <input className="input-field" placeholder="Vize Notu" />
          <input className="input-field" placeholder="Final Notu" />
          <button className="btn-submit">Notu Sisteme İşle</button>
        </section>
        <section className="card">
          <h3>Mevcut Sınıf Not Listesi (Önizleme)</h3>
          <div className="data-row"><span>Mobil Programlama</span> <span>Vize: 85 | Final: 90</span></div>
          <div className="data-row"><span>Veri Tabanı</span> <span>Vize: 70 | Final: 75</span></div>
        </section>
      </div>
    );

    if (role === 'idari') return (
      <div className="grid-container">
        <section className="card">
          <h3>İdari İşler - Yeni Ders Tanımlama</h3>
          <input className="input-field" placeholder="Açılacak Yeni Dersin Adı" />
          <button className="btn-submit" style={{background: '#0056b3'}}>Dersi Müfredata Ekle</button>
        </section>
        <section className="card">
          <h3>Enstitü Genel İstatistikleri</h3>
          <div style={{display:'flex', justifyContent:'space-around', marginTop:'20px'}}>
            <div className="stat-box"><h4>Aktif Müfredat</h4><p>4</p></div>
            <div className="stat-box"><h4>Kayıtlı Öğrenci</h4><p>1,240</p></div>
          </div>
        </section>
      </div>
    );

    if (role === 'ogrenci') return (
      <div className="card" style={{margin:'20px'}}>
        <h3>Dönem Ders Durumu ve Notlar</h3>
        <table className="styled-table">
          <thead><tr><th>Ders Adı</th><th>Vize</th><th>Final</th><th>Devamsızlık</th></tr></thead>
          <tbody>
            <tr><td>Mobil Programlama</td><td>85</td><td>90</td><td>2 Gün</td></tr>
            <tr><td>Veri Tabanı</td><td>70</td><td>75</td><td>4 Gün</td></tr>
          </tbody>
        </table>
      </div>
    );
  };

  // GİRİŞ EKRANI (Role Seçimi)
  if (!role) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1>Öğrenci Bilgi Sistemi</h1>
          <p>Lütfen sisteme giriş yapmak için bir rol seçiniz:</p>
          <button onClick={() => setRole('akademisyen')} className="login-btn ak">Akademisyen Girişi</button>
          <button onClick={() => setRole('idari')} className="login-btn id">İdari Personel Girişi</button>
          <button onClick={() => setRole('ogrenci')} className="login-btn og">Öğrenci Girişi</button>
        </div>
      </div>
    );
  }

  // ŞİFRE EKRANI
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2>{role.toUpperCase()} GİRİŞİ</h2>
          <input className="input-field" placeholder="Kullanıcı Adı" />
          <input className="input-field" type="password" placeholder="Şifre" />
          <button className="btn-submit" onClick={handleLogin}>GİRİŞ YAP</button>
          <button onClick={() => setRole(null)} style={{marginTop:'10px', background:'none', border:'none', color:'red', cursor:'pointer'}}>Geri Dön</button>
        </div>
      </div>
    );
  }

  // ANA PANEL
  return (
    <div>
      <header className="navbar">
        <span>ÖBS | {role.toUpperCase()} PANELİ</span>
        <button onClick={() => {setIsLoggedIn(false); setRole(null)}} style={{background:'#dc3545', color:'white', border:'none', padding:'5px 10px', borderRadius:'4px', cursor:'pointer'}}>Çıkış Yap</button>
      </header>
      {renderContent()}
    </div>
  );
}
export default App;