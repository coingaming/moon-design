import '../styles/globals.css';
import '../styles/themes.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="theme-moon-light">
        <div className="layout bg-goku text-bulma flex">
          <div className="min-h-screen lg:ms-80 bg-gohan flex-1 w-0 flex flex-col ltr:lg:rounded-tl-3xl rtl:lg:rounded-tr-3xl px-5 xl:px-20 2xl:px-32 lg:pt-12 xl:pb-52">
            <div className="flex flex-col grow max-w-screen-xl">
              <main className="flex flex-col flex-1 relative focus:outline-none">
                <div className="flex flex-col gap-12 min-h-full">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
