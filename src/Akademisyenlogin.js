import React from 'react';
import { useNavigate } from 'react-router-dom';

function AkademisyenLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Akademisyen sistemine giriş yapılıyor...');
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>
          ⬅️ Ana Sayfaya Dön
        </button>
        
        <div style={styles.loginHeader}>
          <h2 style={styles.title}>Akademisyen Girişi</h2>
          <p style={styles.subtitle}>Öğretim Elemanı sistemine erişmek için bilgilerinizi giriniz.</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.loginForm}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-posta / Kullanıcı Adı</label>
            <input 
              type="text" 
              placeholder="E-posta adresinizi giriniz" 
              required 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Şifre</label>
            <input 
              type="password" 
              placeholder="Şifrenizi giriniz" 
              required 
              style={styles.input}
            />
          </div>

          <div style={styles.formActions}>
            <label style={styles.rememberMe}>
              <input type="checkbox" /> Beni Hatırla
            </label>
            <a href="#forgot" style={styles.forgotPassword}>Şifremi Unuttum</a>
          </div>

          <button type="submit" style={styles.submitBtn}>
            Giriş Yap
          </button>
        </form>
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
    top: 0, left: 0, right: 0, bottom: 0
  },
  loginCard: {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    width: '100%',
    maxWidth: '400px',
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '20px',
    padding: 0,
    textAlign: 'left'
  },
  loginHeader: {
    textAlign: 'center',
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
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#334155',
    fontSize: '14px',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    marginBottom: '24px',
  },
  rememberMe: {
    color: '#64748b',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  forgotPassword: {
    color: '#10b981', // Akademisyenler için yeşil link
    textDecoration: 'none',
    fontWeight: '600',
  },
  submitBtn: {
    width: '100%',
    padding: '14px',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: '#10b981', // Akademisyenler için yeşil buton
  }
};

export default AkademisyenLogin;