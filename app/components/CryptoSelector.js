'use client';

import React from 'react';

const cryptos = [
  { value: 'BTC/USD', label: 'Bitcoin (BTC/USD)' },
  { value: 'ETH/USD', label: 'Ethereum (ETH/USD)' },
  { value: 'SOL/USD', label: 'Solana (SOL/USD)' },
  // Agregá más pares si querés
];

export const CryptoSelector = ({ selectedCrypto, onCryptoChange }) => (
  <div>
    <label htmlFor="crypto-select" style={{ display: 'block', marginBottom: 8 }}>
      Cryptocurrency:
    </label>
    <select
      id="crypto-select"
      value={selectedCrypto}
      onChange={e => onCryptoChange(e.target.value)}
      style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd', width: '100%' }}
    >
      {cryptos.map(crypto => (
        <option key={crypto.value} value={crypto.value}>
          {crypto.label}
        </option>
      ))}
    </select>
  </div>
);
