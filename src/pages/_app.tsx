import type { AppProps } from 'next/app'
import { CartContextProvider } from '@/contexts/CartContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '@/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartContextProvider>
  )
}
