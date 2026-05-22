import React, { useState } from 'react';

function Dashboard({ user, onLogout }) {
  // --- ÖĞRENCİ VERİLERİ (MOCK DATA) ---
  const [dersler, setDersler] = useState([
    { id: 1, ad: 'Mobil Programlama', vize: 85, final: 90, devamsizlik: 2 },
    { id: 2, ad: 'Veri Tabanı Yönetimi', vize: 70, final: 75, devamsizlik: 4 },
    { id: 3, ad: 'Web Tasarımı ve Bileşenleri', vize: 60, final: 80, devamsizlik: 0 },
    { id: 4, ad: 'Lineer Cebir', vize: 45, final: 65, devamsizlik: 3 },
  ]);

  // --- AKADEMİSYEN İÇİN FORM STATE'LERİ ---
  const [seciliDers, setSeciliDers] = useState(1);
  const [yeniVize, setYeniVize] = useState('');
  const [yeniFinal, setYeniFinal] = useState('');
  const [notMesaj, setNotMesaj] = useState('');

  // --- İDARİ PERSONEL İÇİN STATE'LER ---
  const [yeniDersAdi, setYeniDersAdi] = useState('');
  const [dersMesaj, setDersMesaj] = useState('');

  // Akademisyen Not Güncelleme Fonksiyonu
  const handleNotGuncelle = (e) => {
    e.preventDefault();
    if (!yeniVize || !yeniFinal) {
      setNotMesaj('Lütfen vize ve final notlarını giriniz!');
      return;
    }
    setDersler(dersler.map(ders => 
      ders.id === parseInt(seciliDers) 
        ? { ...ders, vize: parseInt(yeniVize), final: parseInt(yeniFinal) }
        : ders
    ));
    setNotMesaj('Notlar başarıyla güncellendi ve sisteme işlendi!');
    setYeniVize('');
    setYeniFinal('');
  };

  // İdari Personel Yeni Ders Ekleme Fonksiyonu
  const handleDersEkle = (e) => {
    e.preventDefault();
    if (!yeniDersAdi) {
      setDersMesaj('Lütfen ders adını yazınız!');
      return;
    }
    const yeniDers = {
      id: dersler.length + 1,
      ad: yeniDersAdi,
      vize: 0,
      final: 0,
      devamsizlik: 0
    };
    setDersler([...dersler, yeniDers]);
    setDersMesaj(`"${yeniDersAdi}" dersi başarıyla müfredata eklendi!`);
    setYeniDersAdi('');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      {/* Üst Menü / Navbar */}
      <nav style={{ backgroundColor: '#2e7d32', color: 'white', padding: '15px 30px', display: 'flex', justifycontent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0, fontSize: '20px' }}>Öğrenci Bilgi Sistemi</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span>Hoş geldin, <strong>{user.username}</strong> <span style={{ backgroundColor: '#fff', color: '#2e7d32', padding: '3px 8px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', marginLeft: '5px' }}>{user.role.toUpperCase()}</span></span>
          <button onClick={onLogout} style={{ backgroundColor: '#d32f2f', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            Çıkış Yap
          </button>
        </div>
      </nav>

      {/* ROL BAZLI İÇERİK ALANI */}
      <div style={{ padding: '40px' }}>
        
        {/* 1. ÖĞRENCİ PANELİ */}
        {user.role === 'ogrenci' && (
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginTop: 0, color: '#333', borderBottom: '2px solid #2e7d32', paddingBottom: '10px' }}>Dönem Ders Durumu ve Notlar</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
                  <th style={{ padding: '12px' }}>Ders Adı</th>
                  <th style={{ padding: '12px' }}>Vize</th>
                  <th style={{ padding: '12px' }}>Final</th>
                  <th style={{ padding: '12px' }}>Devamsızlık</th>
                  <th style={{ padding: '12px' }}>Durum</th>
                </tr>
              </thead>
              <tbody>
                {dersler.map((ders) => {
                  const ortalama = (ders.vize * 0.4) + (ders.final * 0.6);
                  const isPassed = ortalama >= 50;
                  return (
                    <tr key={ders.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{ders.ad}</td>
                      <td style={{ padding: '12px' }}>{ders.vize}</td>
                      <td style={{ padding: '12px' }}>{ders.final}</td>
                      <td style={{ padding: '12px' }}>{ders.devamsizlik} Gün</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ backgroundColor: isPassed ? '#e8f5e9' : '#ffebee', color: isPassed ? '#2e7d32' : '#c62828', padding: '5px 10px', borderRadius: '15px', fontSize: '13px', fontWeight: 'bold' }}>
                          {isPassed ? 'Geçti' : 'Kaldı'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* 2. AKADEMİSYEN PANELİ */}
        {user.role === 'akademisyen' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {/* Sol Taraf: Not Giriş Formu */}
            <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginTop: 0, color: '#333', borderBottom: '2px solid #2e7d32', paddingBottom: '10px' }}>Akademisyen Not Giriş Paneli</h3>
              
              {notMesaj && <div style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px' }}>{notMesaj}</div>}
              
              <form onSubmit={handleNotGuncelle}>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Ders Seçiniz</label>
                  <select value={seciliDers} onChange={(e) => setSeciliDers(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
                    {dersler.map(ders => <option key={ders.id} value={ders.id}>{ders.ad}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Vize Notu</label>
                  <input type="number" value={yeniVize} onChange={(e) => setYeniVize(e.target.value)} min="0" max="100" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="0-100 arası" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Final Notu</label>
                  <input type="number" value={yeniFinal} onChange={(e) => setYeniFinal(e.target.value)} min="0" max="100" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="0-100 arası" />
                </div>
                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>Notu Sisteme İşle</button>
              </form>
            </div>

            {/* Sağ Taraf: Mevcut Durum Önizleme */}
            <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginTop: 0, color: '#333', borderBottom: '2px solid #666', paddingBottom: '10px' }}>Mevcut Sınıf Not Listesi (Önizleme)</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {dersler.map(ders => (
                  <li key={ders.id} style={{ padding: '12px 0', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{ders.ad}</strong>
                    <span>Vize: {ders.vize} | Final: {ders.final}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 3. İDARİ PERSONEL PANELİ */}
        {user.role === 'idari' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {/* Sol Taraf: Yeni Ders Açma */}
            <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginTop: 0, color: '#333', borderBottom: '2px solid #1976d2', paddingBottom: '10px' }}>İdari İşler - Yeni Ders Tanımlama</h3>
              
              {dersMesaj && <div style={{ backgroundColor: '#e3f2fd', color: '#1976d2', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px' }}>{dersMesaj}</div>}
              
              <form onSubmit={handleDersEkle}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: '#666' }}>Açılacak Yeni Dersin Adı</label>
                  <input type="text" value={yeniDersAdi} onChange={(e) => setYeniDersAdi(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }} placeholder="Örn: Yapay Zekaya Giriş" />
                </div>
                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}>Dersi Müfredata Ekle</button>
              </form>
            </div>

            {/* Sağ Taraf: Sistem İstatistikleri */}
            <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginTop: 0, color: '#333', borderBottom: '2px solid #666', paddingBottom: '10px' }}>Enstitü Genel İstatistikleri</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px', textAlign: 'center', borderLeft: '5px solid #1976d2' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Aktif Müfredat Ders Sayısı</span>
                  <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>{dersler.length}</h2>
                </div>
                <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px', textAlign: 'center', borderLeft: '5px solid #2e7d32' }}>
                  <span style={{ color: '#666', fontSize: '14px' }}>Kayıtlı Toplam Öğrenci</span>
                  <h2 style={{ margin: '10px 0 0 0', color: '#333' }}>1,240</h2>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;