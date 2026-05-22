import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [role, setRole] = useState('ogrenci'); // ogrenci, akademisyen, idari
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Lütfen tüm alanları doldurunuz!');
      return;
    }

    // Basit bir giriş kontrolü simülasyonu
    setError('');
    // Giriş başarılı olunca App.jsx'e haber veriyoruz ve rolü gönderiyoruz
    onLoginSuccess(role, username);
  };

  const tabStyle = (currentRole) => ({
    flex: 1,
    padding: '12px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: role === currentRole ? '#2e7d32' : '#eee',
    color: role === currentRole ? 'white' : '#555',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    fontSize: '14px'
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '400px', overflow: 'hidden' }}>
        
        {/* Rol Seçim Sekmeleri */}
        <div style={{ display: 'flex' }}>
          <div style={tabStyle('ogrenci')} onClick={() => { setRole('ogrenci'); setError(''); }}>Öğrenci</div>
          <div style={tabStyle('akademisyen')} onClick={() => { setRole('akademisyen'); setError(''); }}>Akademisyen</div>
          <div style={tabStyle('idari')} onClick={() => { setRole('idari'); setError(''); }}>İdari Personel</div>
        </div>

        <div style={{ padding: '30px' }}>
          <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px', marginTop: 0 }}>
            {role === 'ogrenci' ? 'Öğrenci Girişi' : role === 'akademisyen' ? 'Akademisyen Girişi' : 'İdari Personel Girişi'}
          </h2>
          
          {error && (
            <div style={{ backgroundColor: '#ffebee', color: '#c62828', padding: '10px', borderRadius: '5px', marginBottom: '20px', fontSize: '14px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Kullanıcı Adı / No</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                placeholder={`${role === 'ogrenci' ? 'Öğrenci numaranızı' : 'Kullanıcı adınızı'} giriniz`}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Şifre</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                placeholder="••••••••"
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;