import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { Slider } from '@/components/Slider'
import { Card } from '@/components/Cards'
import { Photos } from '@/components/Photos'

interface HomeProps {
  products: {
    id: string
    name: string
    image: string
    price: string
  }[]
}

export default function Page({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>E-Shop</title>
      </Head>
      <Slider />

      <main className="flex flex-col items-center justify-center">
        <Card />
        <h1 className="mt-14 text-5xl font-bold text-white text-center">
          Nossos <span className="text-violet-500">Destaques</span>
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-2 px-8 gap-12 pt-8 pb-14 lg:pb-36 justify-center items-center max-w-5xl">
          {products.map(product => {
            return (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-slate-500/10 p-1 cursor-pointer flex items-center justify-center md:p-8 lg:p-10 relative transition-all duration-500 ease-in-out ring-offset-2 hover:ring-2 ring-green-300/80  dark:ring-offset-slate-900 rounded-md group">
                  <Image
                    className="w-96 h-[25rem] object-contain p-5"
                    width={400}
                    height={320}
                    src={product.image}
                    alt={product.name}
                  />
                  <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center flex-col gap-1 bg-zinc-950/70 p-7">
                    <strong className="text-lg text-white font-semibold">
                      {product.name}
                    </strong>
                    <span className="text-xl font-bold text-green-300">
                      {product.price}
                    </span>
                  </footer>
                </div>
              </Link>
            )
          })}
        </div>
        <Photos />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60
  }
}
