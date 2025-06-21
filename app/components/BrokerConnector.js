'use client';

import React, { useState } from 'react';

export const BrokerConnector = ({ selectedBroker, onBrokerChange }) => {
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    // Simula conexión (acá podés hacer la validación real con Alpaca)
    setConnected(true);
  };

  return (
    <div
      style={{
        maxWidth: 420,           // El ancho máximo del cuadro
        width: "100%",
        margin: "0 auto",
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 1px 6px #0001",
        padding: 18,
        boxSizing: "border-box",
        marginBottom: 24,
      }}
    >
      {/* Título */}
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 28, marginBottom: 12 }}>
        <span style={{ marginRight: 10 }}>🗂️</span>
        Broker
      </div>

      {/* Selector de broker */}
      <label style={{ fontWeight: 600, fontSize: 18, marginBottom: 3, display: 'block' }}>Select Broker</label>
      <div style={{ marginBottom: 4 }}>
        <select
          value={selectedBroker}
          onChange={e => {
            onBrokerChange(e.target.value);
            setConnected(false);
          }}
          style={{
            width: '100%',
            padding: 12,
            borderRadius: 8,
            border: '1px solid #ccc',
            fontSize: 18,
            fontWeight: 500
          }}
        >
          <option value="">Select...</option>
          <option value="alpaca">Alpaca</option>
        </select>
        {selectedBroker === "alpaca" && (
          <span style={{
            background: "#111c2b",
            color: "#fff",
            padding: "2px 10px",
            borderRadius: 16,
            fontSize: 16,
            fontWeight: 700,
            marginLeft: 10,
            position: "relative",
            top: -5
          }}>
            Recommended
          </span>
        )}
      </div>
      {selectedBroker === "alpaca" &&
        <div style={{ fontSize: 14, color: "#7a8897", marginBottom: 18, marginTop: -2 }}>
          Commission-free trading with crypto support
        </div>
      }

      {/* API Key y API Secret */}
      {selectedBroker === "alpaca" && (
        <>
          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>API Key</div>
          <input
            type="password"
            placeholder="API Key"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            style={{
              width: '100%',
              padding: 16,
              borderRadius: 8,
              border: '1px solid #ddd',
              fontSize: 18,
              marginBottom: 18,
              background: "#fff"
            }}
          />

          <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 2 }}>API Secret</div>
          <input
            type="password"
            placeholder="API Secret"
            value={apiSecret}
            onChange={e => setApiSecret(e.target.value)}
            style={{
              width: '100%',
              padding: 16,
              borderRadius: 8,
              border: '1px solid #ddd',
              fontSize: 18,
              marginBottom: 18,
              background: "#fff"
            }}
          />

          {/* Botón conectar */}
          <button
            onClick={handleConnect}
            disabled={!apiKey || !apiSecret}
            style={{
              width: '100%',
              padding: 16,
              background: "#0f172a",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 20,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              cursor: (!apiKey || !apiSecret) ? "not-allowed" : "pointer",
              opacity: (!apiKey || !apiSecret) ? 0.5 : 1
            }}
          >
            <span role="img" aria-label="key">🔑</span>
            Connect Broker
          </button>

          {/* Mensaje de conexión */}
          {connected && (
            <div style={{
              background: "#eafbee",
              color: "#17964b",
              border: "1px solid #b9e5cb",
              borderRadius: 12,
              padding: 18,
              fontWeight: 600,
              fontSize: 22,
              display: "flex",
              alignItems: "center",
              gap: 10
            }}>
              <span style={{ fontSize: 24 }}>✔️</span>
              Connected to Alpaca
            </div>
          )}
        </>
      )}
    </div>
  );
};
