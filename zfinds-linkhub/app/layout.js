export const metadata = {
  title: "ZFinds | Hub Oficial",
  description: "Promoções esportivas, achados insanos e produtos que realmente valem a pena."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}