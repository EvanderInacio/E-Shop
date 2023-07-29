import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'

interface SuccessProps {
  costumerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ costumerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | E-Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex flex-col items-center justify-center m-[0_auto] pt-16">
        <h1 className="text-2xl text-gray-100 mb-16 text-center">
          Compra efetuada com sucesso!
        </h1>

        <Image
          className="w-96 h-[25rem] bg-slate-500/10 rounded-md p-5 flex items-center justify-center object-contain"
          width={400}
          height={320}
          src={product.imageUrl}
          alt={product.name}
        />

        <p className="text-xl text-gray-300 my-16 max-w-xl text-center">
          Uhuul <strong className="text-green-300">{costumerName}</strong>, seu
          produto <strong className="text-violet-550">{product.name}</strong> já
          está a caminho da sua casa.
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
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}
