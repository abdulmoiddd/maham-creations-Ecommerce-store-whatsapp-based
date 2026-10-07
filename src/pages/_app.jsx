// src/pages/_app.jsx
import '@/styles/globals.css';
import { CartProvider } from '@/lib/CartContext'; // Must be imported

export default function App({ Component, pageProps }) {
  return (
    // If CartProvider is missing here, the button will fail
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}