import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <div style={styles.loginHeader}>
          <h2 style={styles.title}>Öğrenci Bilgi Sistemi</h2>
          <p style={styles.subtitle}>Lütfen giriş yapmak istediğiniz paneli seçiniz.</p>
        </div>
        
        <div style={styles.buttonGroup}>
          <button style={{...styles.panelBtn, borderLeft: '5px solid #3b82f6'}} onClick={() => navigate('/ogrenci')}>
            👨‍🎓 Öğrenci Girişi
          </button>
          <button style={{...styles.panelBtn, borderLeft: '5px solid #10b981'}} onClick={() => navigate('/akademisyen')}>
            👩‍🏫 Akademisyen Girişi
          </button>
          <button style={{...styles.panelBtn, borderLeft: '5px solid #6366f1'}} onClick={() => navigate('/idari')}>
            🏢 İdari Personel Girişi
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  loginCard: {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  loginHeader: {
    marginBottom: '30px',
  },
  title: {
    color: '#1e293b',
    marginBottom: '8px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#64748b',
    fontSize: '14px',
    margin: 0,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  panelBtn: {
    width: '100%',
    padding: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#334155',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'left',
    paddingLeft: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  }
};

export default Home;