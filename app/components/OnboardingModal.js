'use client';

import React from 'react';

export const OnboardingModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: '#fff', borderRadius: 10, padding: 32, maxWidth: 480, width: '100%', boxShadow: '0 4px 24px 0 #0002'
      }}>
        <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 16 }}>¡Bienvenido a Inv.bot!</h2>
        <p style={{ marginBottom: 12 }}>
          Esta plataforma te permite automatizar inversiones en criptomonedas fácilmente.
        </p>
        <ol style={{ marginLeft: 20, marginBottom: 12 }}>
          <li>Seleccioná tu estrategia favorita o pegá tu Pine Script.</li>
          <li>Conectá tu broker (Alpaca, más adelante otros).</li>
          <li>Elegí la cripto a operar.</li>
          <li>Activá el bot y seguí tu historial de operaciones.</li>
        </ol>
        <p style={{ marginBottom: 18 }}>
          Recordá: <b>Invertir implica riesgos</b>. Usá sólo capital que estés dispuesto a perder.
        </p>
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={onClose}
            style={{
              background: '#0284c7',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '10px 18px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  );
};
