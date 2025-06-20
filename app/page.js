'use client';

import React, { useState } from 'react';
import { DisclaimerModal } from './components/DisclaimerModal';
import { OnboardingModal } from './components/OnboardingModal';
import { StrategySelector } from './components/StrategySelector';
import { BrokerConnector } from './components/BrokerConnector';
import { CryptoSelector } from './components/CryptoSelector';
import { BotControls } from './components/BotControls';
import { TradeHistory } from './components/TradeHistory';

export default function Home() {
  const [botActive, setBotActive] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [selectedBroker, setSelectedBroker] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC/USD');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 p-4" style={{ minHeight: '100vh', background: '#f8fafc', padding: 24 }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: '#0f172a' }}>Inv.bot Dashboard</h1>
            <p style={{ color: '#64748b' }}>Automatizá tu trading de criptomonedas fácil y seguro</p>
          </div>
          <div>
            <button
              style={{
                border: '1px solid #94a3b8',
                borderRadius: 6,
                padding: '7px 16px',
                background: '#fff',
                color: '#0f172a',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              onClick={() => setShowOnboarding(true)}
            >
              Ayuda
            </button>
          </div>
        </div>

        {/* Controles principales */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ flex: 2, minWidth: 260 }}>
            <div style={{ marginBottom: 20, background: '#fff', borderRadius: 10, boxShadow: '0 1px 6px #0001', padding: 18 }}>
              <StrategySelector
                selectedStrategy={selectedStrategy}
                onStrategyChange={setSelectedStrategy}
              />
            </div>
            <div style={{ display: 'flex', gap: 18, marginBottom: 20 }}>
              <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 6px #0001', padding: 18 }}>
                <BrokerConnector
                  selectedBroker={selectedBroker}
                  onBrokerChange={setSelectedBroker}
                />
              </div>
              <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 6px #0001', padding: 18 }}>
                <CryptoSelector
                  selectedCrypto={selectedCrypto}
                  onCryptoChange={setSelectedCrypto}
                />
              </div>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 6px #0001', padding: 18 }}>
              <TradeHistory />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 6px #0001', padding: 18, marginBottom: 20 }}>
              <BotControls
                botActive={botActive}
                onToggle={setBotActive}
                canStart={selectedStrategy && selectedBroker && selectedCrypto}
              />
            </div>
            <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 6px #0001', padding: 18 }}>
              <div style={{ marginBottom: 12 }}>
                <span style={{ color: '#64748b', fontSize: 14 }}>Estrategia</span>
                <div style={{ fontWeight: 600 }}>{selectedStrategy || 'No seleccionada'}</div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <span style={{ color: '#64748b', fontSize: 14 }}>Broker</span>
                <div style={{ fontWeight: 600 }}>{selectedBroker || 'No conectado'}</div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <span style={{ color: '#64748b', fontSize: 14 }}>Cripto</span>
                <div style={{ fontWeight: 600 }}>{selectedCrypto}</div>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: 14 }}>Estado</span>
                <div style={{ fontWeight: 600, color: botActive ? '#16a34a' : '#b91c1c' }}>
                  {botActive ? 'Bot activo' : 'Pausado'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <OnboardingModal
        open={showOnboarding}
        onClose={() => setShowOnboarding(false)}
      />
      <DisclaimerModal
        open={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
      />
    </div>
  );
}

