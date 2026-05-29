import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Load indigo theme for /indigo route, otherwise globals loads default emerald
  if (router.pathname === '/indigo') {
    require('../styles/indigo.css');
  }
  
  return <Component {...pageProps} />;
}
