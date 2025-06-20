export const metadata = {
  title: 'Inv.bot',
  description: 'Dashboard de trading automático en criptomonedas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
