'use client';

import React from 'react';

const strategies = [
  { value: '', label: 'Select a strategy' },
  { value: 'ema-crossover', label: 'EMA Crossover' },
  { value: 'rsi-extreme', label: 'Extreme RSI' },
  { value: 'marea-dorada', label: 'Marea Dorada' },
  { value: 'custom-pine', label: 'Custom Pine Script' },
];

export const StrategySelector = ({ selectedStrategy, onStrategyChange }) => (
  <div>
    <label htmlFor="strategy-select" style={{ display: 'block', marginBottom: 8 }}>
      Strategy:
    </label>
    <select
      id="strategy-select"
      value={selectedStrategy}
      onChange={e => onStrategyChange(e.target.value)}
      style={{ padding: 8, borderRadius: 4, border: '1px solid #ddd', width: '100%' }}
    >
      {strategies.map(strategy => (
        <option key={strategy.value} value={strategy.value}>
          {strategy.label}
        </option>
      ))}
    </select>
    {selectedStrategy === 'custom-pine' && (
      <div style={{ marginTop: 12 }}>
        <textarea
          placeholder="Paste your TradingView Pine Script here"
          style={{
            width: '100%',
            minHeight: 100,
            border: '1px solid #ccc',
            borderRadius: 4,
            padding: 8,
            fontFamily: 'monospace',
          }}
        />
      </div>
    )}
  </div>
);
