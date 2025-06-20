'use client';

import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: 'Inv.bot',
  description: 'Dashboard de trading automático en criptomonedas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
