import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

interface SuccessProps {
  costumerName: string
  productsImages: string[]
}

export default function Success({ costumerName, productsImages }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | E-Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex flex-col items-center justify-center m-[0_auto] pt-16">
        <div className="flex flex-col lg:flex-row lg:flex-wrap max-w-7xl items-center justify-center gap-4 mb-20">
          {productsImages.map((image, i) => {
            return (
              <Image
                key={i}
                className="w-96 h-[25rem] bg-slate-500/10 rounded-md p-5 flex items-center justify-center object-contain"
                width={400}
                height={320}
                src={image}
                alt=""
              />
            )
          })}
        </div>

        <h1 className="text-xl lg:text-5xl text-violet-550 text-center">
          Compra efetuada com sucesso!
        </h1>

        <p className="text-base lg:text-2xl text-gray-300 my-16 max-w-xl text-center">
          Uhuul <strong className="text-green-300">{costumerName}</strong>, sua
          compra de{' '}
          <span className="text-green-300 font-extrabold">
            {productsImages.length}
          </span>{' '}
          {productsImages.length === 1 ? 'produto' : 'produtos'} já está a
          caminho da sua casa 😄
        </p>

        <Link
          className="text-lg text-green-500 hover:text-green-300 font-bold"
          href={'/'}
        >
          Voltar ao catálogo
        </Link>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const costumerName = session.customer_details?.name
  const productsImages = session.line_items?.data.map(item => {
    const product = item.price?.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      costumerName,
      productsImages
    }
  }
}
