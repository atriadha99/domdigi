import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [saldo, setSaldo] = useState({ ovo: 0, gopay: 0, dana: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mendapatkan saldo dari backend API
    async function fetchSaldo() {
      try {
        const response = await axios.get('http://localhost:3000/api/saldo?userId=12345'); // Sesuaikan dengan URL backend Anda
        setSaldo(response.data);
        setLoading(false);
      } catch (err) {
        setError('Terjadi kesalahan saat mengambil saldo.');
        setLoading(false);
      }
    }

    fetchSaldo();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Saldo Dompet Digital</h1>
      <p>Saldo OVO: Rp{saldo.ovo}</p>
      <p>Saldo GoPay: Rp{saldo.gopay}</p>
      <p>Saldo DANA: Rp{saldo.dana}</p>
      <h2>Total Saldo: Rp{saldo.total}</h2>
    </div>
  );
}

export default App;
