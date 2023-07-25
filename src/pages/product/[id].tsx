import { stripe } from '@/lib/stripe'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    image: string
    price: string
    description: string
  }
}

export default function Product({ product }: ProductProps) {
  return (
    <>
     <Head>
        <title>{`${product.name} | E-Shop`}</title>
      </Head>
      
      <div className="pt-20 pb-16 grid px-2 items-center justify-center lg:grid-cols-2 lg:items-stretch gap-16 max-w-7xl m-[0_auto]">
        <div className="w-full max-w-xl h-[600px] bg-slate-500/10 rounded-lg p-1 flex items-center justify-center m-[0_auto]">
          <Image
            className="object-contain w-96 h-[30rem] "
            width={400}
            height={320}
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-[2rem] text-gray-300">{product.name}</h1>
          <span className="mt-4 block text-[2rem] text-green-300">
            {product.price}
          </span>

          <p className="mt-11 text-lg text-gray-300 ">{product.description}</p>

          <button className="mt-8 lg:mt-auto bg-green-500 border-0 text-white rounded-lg p-5 cursor-pointer font-bold text-lg hover:bg-green-300">
            Add Cart
          </button>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}: any) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description
      }
    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
