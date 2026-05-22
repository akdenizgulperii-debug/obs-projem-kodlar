import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  // Kullanıcının giriş yapıp yapmadığını ve bilgilerini tutan hafıza çarkı
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (role, username) => {
    setUser({ role, username });
  };

  const handleLogout = () => {
    setUser(null); // Kullanıcıyı sıfırlayıp giriş ekranına geri gönderir
  };

  return (
    <div>
      {user ? (
        // Eğer kullanıcı giriş yaptıysa Dashboard panelini göster
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        // Giriş yapmadıysa Giriş ekranını göster
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;