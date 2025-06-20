'use client';

import React from 'react';

// Historial de ejemplo (en la versión final va a venir del backend)
const sampleHistory = [
  { date: '2024-06-17', action: 'BUY', symbol: 'BTC/USD', qty: 0.01, price: 67000, result: '+$45' },
  { date: '2024-06-16', action: 'SELL', symbol: 'BTC/USD', qty: 0.01, price: 66900, result: '-$10' },
];

export const TradeHistory = () => (
  <div>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f3f4f6' }}>
          <th style={{ padding: 8, border: '1px solid #ddd' }}>Date</th>
          <th style={{ padding: 8, border: '1px solid #ddd' }}>Action</th>
          <th style={{ padding: 8, border: '1px solid #ddd' }}>Pair</th>
          <th style={{ padding: 8, border: '1px solid #ddd' }}>Qty</th>
          <th style={{ padding: 8, border: '1px solid #ddd' }}>Price</th>
          <th style={{ padding: 8, border: '1px solid #ddd' }}>Result</th>
        </tr>
      </thead>
      <tbody>
        {sampleHistory.map((trade, idx) => (
          <tr key={idx}>
            <td style={{ padding: 8, border: '1px solid #ddd' }}>{trade.date}</td>
            <td style={{ padding: 8, border: '1px solid #ddd' }}>{trade.action}</td>
            <td style={{ padding: 8, border: '1px solid #ddd' }}>{trade.symbol}</td>
            <td style={{ padding: 8, border: '1px solid #ddd' }}>{trade.qty}</td>
            <td style={{ padding: 8, border: '1px solid #ddd' }}>${trade.price}</td>
            <td style={{ padding: 8, border: '1px solid #ddd' }}>{trade.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
