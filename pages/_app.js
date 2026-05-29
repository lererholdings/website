import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  if (router.pathname === '/emerald') {
    require('../styles/emerald.css');
  }
  
  return <Component {...pageProps} />;
}
