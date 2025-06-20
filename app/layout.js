export const metadata = {
  title: 'Inv.bot',
  description: 'Dashboard de trading automático en criptomonedas',
};

import SessionWrapper from './SessionWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
