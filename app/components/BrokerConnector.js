'use client';

import React, { useState } from 'react';

const brokers = [
  { value: '', label: 'Select a broker' },
  { value: 'alpaca', label: 'Alpaca' },
  // { value: 'binance', label: 'Binance (próximamente)' }
];

export const BrokerConnector = ({ selectedBroker, onBrokerChange }) => {
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');

  return (
    <div>
      <label htmlFor="broker-select" style={{ display: 'block', marginBottom: 8 }}>
        Broker:
      </label>
      <select
        id="broker-select"
        value={selectedBroker}
        onChange={e => onBrokerChange(e.target.value)}
        style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd', width: '100%' }}
      >
        {brokers.map(broker => (
          <option key={broker.value} value={broker.value}>
            {broker.label}
          </option>
        ))}
      </select>
      {selectedBroker === 'alpaca' && (
        <div style={{ marginTop: 12 }}>
          <input
            type="text"
            placeholder="API Key"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            style={{
              width: '100%',
              padding: 8,
              marginBottom: 8,
              borderRadius: 4,
              border: '1px solid #ccc'
            }}
          />
          <input
            type="password"
            placeholder="API Secret"
            value={apiSecret}
            onChange={e => setApiSecret(e.target.value)}
            style={{
              width: '100%',
              padding: 8,
              borderRadius: 4,
              border: '1px solid #ccc'
            }}
          />
        </div>
      )}
    </div>
  );
};
