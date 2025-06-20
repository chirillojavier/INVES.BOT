'use client';

import React, { useState } from 'react';
import { DisclaimerModal } from './DisclaimerModal';

const Dashboard = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    <div>
      <h1>CryptoBot Dashboard</h1>
      <DisclaimerModal open={showDisclaimer} onClose={() => setShowDisclaimer(false)} />
      {/* Acá irán los demás componentes y el layout */}
    </div>
  );
};

export default Dashboard;
