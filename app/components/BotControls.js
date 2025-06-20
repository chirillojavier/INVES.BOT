'use client';

import React from 'react';

export const BotControls = ({ botActive, onToggle, canStart }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <button
      onClick={() => onToggle(!botActive)}
      disabled={!canStart}
      style={{
        background: botActive ? '#16a34a' : '#d97706',
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        padding: '12px 24px',
        fontWeight: 'bold',
        cursor: canStart ? 'pointer' : 'not-allowed'
      }}
    >
      {botActive ? 'Pause Bot' : 'Start Bot'}
    </button>
    {!canStart && (
      <div style={{ color: '#b91c1c', fontSize: 14 }}>
        Please select strategy, broker, and cryptocurrency to start.
      </div>
    )}
  </div>
);
