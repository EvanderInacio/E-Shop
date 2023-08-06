import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { IProduct, useCart } from '@/contexts/CartContext'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import * as Toast from '@radix-ui/react-toast'
import { Heart, ShoppingCartSimple } from 'phosphor-react'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addToCart, addFavorite, checkItemExists, checkFavorite } = useCart()
  const { isFallback } = useRouter()
  const [toastOpen, setToastOpen] = useState(false)

  const itemAlreadyInCart = checkItemExists(product.id)
  const itemAlreadyInFavorite = checkFavorite(product.id)

  if (isFallback) {
    return <p className="m-[0_auto] text-green-400">loading.....</p>
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | E-Shop`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
      </Head>

      <div className="pt-20 pb-16 grid px-2 items-center justify-center lg:grid-cols-2 lg:items-stretch gap-16 max-w-7xl m-[0_auto]">
        <div className="w-full max-w-xl h-[500px] bg-slate-500/10 rounded-lg p-4 flex items-center justify-center m-[0_auto]">
          <Image
            className="object-contain w-96 h-[25rem] "
            width={400}
            height={320}
            src={product.imageUrl}
            alt={product.name}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-[2rem] text-gray-300">{product.name}</h1>
          <span className="mt-4 block text-[2rem] text-green-300">
            {product.price}
          </span>

          <p className="mt-11 text-lg text-gray-300 ">{product.description}</p>

          <div className="flex mt-8 lg:mt-auto gap-4">
            <button
              disabled={itemAlreadyInCart}
              onClick={() => {
                setToastOpen(true)
                addToCart(product)
              }}
              className={`flex-1 ${
                itemAlreadyInCart
                  ? 'bg-red-500'
                  : 'bg-green-500 hover:bg-green-300'
              }  border-0 text-white rounded-lg p-5 cursor-pointer font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed `}
            >
              {itemAlreadyInCart
                ? 'Produto já está no carrinho'
                : 'Adicionar ao carrinho'}
            </button>
            <Toast.Provider swipeDirection="right">
              <Toast.Root
                className="bg-green-500 text-white z-50 p-3 rounded-xl"
                duration={3000}
                open={toastOpen}
                onOpenChange={setToastOpen}
              >
                <Toast.Title className="mb-2 text-lg flex items-center gap-1">
                  Adicionado ao carrinho{' '}
                  <ShoppingCartSimple size={18} weight="bold" />
                </Toast.Title>
                <Toast.Description className="font-bold text-lg">
                  {product.name}
                </Toast.Description>
              </Toast.Root>
              <Toast.Viewport className="fixed bottom-0 right-0 flex p-4" />
            </Toast.Provider>

            <button
              disabled={itemAlreadyInFavorite}
              onClick={() => addFavorite(product)}
              className="bg-red-500 p-4 rounded-lg cursor-pointer font-bold text-lg hover:bg-red-600 disabled:opacity-70 disabled:cursor-not-allowed text-white"
            >
              <Heart size={35} weight="bold" />
            </button>
          </div>
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
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description,
        numberPrice: price.unit_amount! / 100,
        defaultPriceId: price.id,
        quantity: 1,
        unitAmount: price.unit_amount
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
