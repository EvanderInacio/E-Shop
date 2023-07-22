import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    image: string
    price: number
  }[]
}

export default function Page({ products }: HomeProps) {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:grid md:grid-cols-2 px-8 gap-12 py-8 justify-center items-center max-w-5xl">
        {products.map(product => {
          return (
            <div
              key={product.id}
              className="bg-slate-500/10 rounded-lg p-1 cursor-pointer relative flex items-center justify-center md:p-8 lg:p-10"
            >
              <Link href={''} className="">
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
                    R$ {product.price}
                  </span>
                </footer>
              </Link>
            </div>
          )
        })}
      </div>
    </main>
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
      price: price.unit_amount
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60
  }
}
