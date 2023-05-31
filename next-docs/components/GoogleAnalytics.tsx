import Script from 'next/script';

const GoogleAnalytics = ({ id }: { id: string }) => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
    </Script>
  </>
);

export default GoogleAnalytics;
