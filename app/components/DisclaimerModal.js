'use client';

import React, { useState } from 'react';

const DisclaimerModal = ({ open, onClose }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) onClose();
  };

  return open ? (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: '#fff', borderRadius: 8, padding: 32, maxWidth: 480, width: '100%' }}>
        <h2 style={{ color: '#b91c1c', display: 'flex', alignItems: 'center', gap: 8 }}>
          ⚠️ Important Legal Disclaimer
        </h2>
        <div style={{ background: '#fee2e2', border: '1px solid #fecaca', borderRadius: 8, padding: 16, margin: '16px 0' }}>
          <strong>Risk Warning:</strong> Trading cryptocurrencies involves substantial risk of loss and is not suitable for all investors.
        </div>
        <div>
          <h4>Terms of Service</h4>
          <ol>
            <li><b>Service Disclaimer:</b> This platform provides automated trading bot services only. We are not financial advisors and do not provide investment advice.</li>
            <li><b>No Guarantees:</b> Past performance does not guarantee future results. All trading strategies may result in losses.</li>
            <li><b>User Responsibility:</b> You are solely responsible for your trading decisions, account management, and any gains or losses resulting from the use of this service.</li>
            <li><b>Risk of Loss:</b> You acknowledge that you may lose some or all of your invested capital and accept full responsibility for such losses.</li>
            <li><b>Third-Party Services:</b> We integrate with third-party brokers and exchanges. We are not responsible for their services, downtime, or security breaches.</li>
            <li><b>No Liability:</b> Under no circumstances shall CryptoBot Dashboard be liable for any direct, indirect, incidental, or consequential damages arising from your use of this service.</li>
          </ol>
        </div>
        <div style={{ background: '#f3f4f6', borderRadius: 8, padding: 16, margin: '16px 0' }}>
          <b>By using this service, you acknowledge that:</b> You understand the risks involved in cryptocurrency trading, you are trading with money you can afford to lose, and you have read and understood all terms and conditions.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input
            type="checkbox"
            id="accept-disclaimer"
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)}
          />
          <label htmlFor="accept-disclaimer">
            I have read, understood, and accept all terms and disclaimers above
          </label>
        </div>
        <div style={{ textAlign: 'right', marginTop: 16 }}>
          <button
            onClick={handleAccept}
            disabled={!accepted}
            style={{
              background: accepted ? '#b91c1c' : '#ddd',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '8px 16px',
              cursor: accepted ? 'pointer' : 'not-allowed'
            }}
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export { DisclaimerModal };

