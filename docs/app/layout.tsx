import './globals.css';

export const metadata = {
  title: 'Moon Design System',
  description:
    'Maintain the integrity of their user experience and optimize design and development resources.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <main className="theme-moon-light bg-goku flex flex-col items-center py-20">
          {children}
        </main>
      </body>
    </html>
  );
}
