import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="E-Shop" />
        <meta name="description" content="Aqui você encontra uma grande variedade de produtos em diversas categorias. Frete Grátis* Confira as Ofertas do Dia. Os Melhores Preços. Até 10x Sem Juros. Grande Seleção. Devolução Fácil." />
        <meta property="og:description" content="Aqui você encontra uma grande variedade de produtos em diversas categorias. Frete Grátis* Confira as Ofertas do Dia. Os Melhores Preços. Até 12x Sem Juros. Grande Seleção. Devolução Fácil." />
        <meta property="og:image" content="/logo.svg" />

        <link rel="icon" href="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
