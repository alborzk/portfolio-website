import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/fontawesome.css";
import "../styles/vendor/font-awesome/css/fontawesome.min.css";
import "../styles/vendor/font-awesome/css/all.css";
import "../styles/vendor/nucleo/css/nucleo.css";

function MyApp({ Component, pageProps }) {
  const hotjarTrackingCode = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3427806,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;

  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.innerHTML = hotjarTrackingCode;
    script.async = true;
    document.head.appendChild(script);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
