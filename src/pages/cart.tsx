import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useCart } from '@/contexts/CartContext'
import { Minus, Plus, Trash } from 'phosphor-react'

export default function Cart() {
  const [isLoading, setIsLoading] = useState(false)
  const { cartItems, removeCart, cartTotal, increaseItemQuantity, decreaseItemQuantity } = useCart()
  const quantity = cartItems.length

  const formattedTotal = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(cartTotal)

  async function handleBuyProduct() {
    try {
      setIsLoading(true)

      const response = await axios.post('/api/checkout', {
        products: cartItems
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('ERRO')
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Carrinho | E-Shop</title>
      </Head>

      <main className="">
        <div className="flex flex-col w-full">
          <h2 className="font-bold text-4xl text-violet-550 pt-2 mb-10 lg:mb-20 flex text-center justify-center items-center lg:text-6xl">
            <Image
              className="hidden sm:flex"
              width={70}
              height={70}
              src={'/cart.svg'}
              alt="Sacola de compra"
            />{' '}
            Sacola de compra
          </h2>

          <section className="flex flex-col lg:flex-row w-full m-[0_auto] justify-evenly max-w-7xl gap-4 mb-10">
            <div className="flex-1">
              {quantity <= 0 && (
                <div className="flex flex-col items-center">
                  <Image
                    width={200}
                    height={200}
                    src={'/buy.svg'}
                    alt="Carrinho de compra"
                  />
                  <p className="text-gray-400 text-lg">
                    Ops! Parece que a sua sacola está vazia 😞
                  </p>
                </div>
              )}

              {cartItems.map(cartItem => (
                <div
                  key={cartItem.id}
                  className="flex flex-col sm:flex-row mb-4 px-4 py-8 justify-between items-center border-b border-gray-400"
                >
                  <div className="flex gap-3">
                    <Image
                      className="w-32 h-28 p-2 bg-slate-500/10 flex items-center justify-center rounded-lg object-contain"
                      width={110}
                      height={100}
                      src={cartItem.imageUrl}
                      alt={cartItem.name}
                    />
                    <div className="flex flex-col">
                      <p className="text-gray-200 text-xl max-w-[15rem]">
                        {cartItem.name}
                      </p>
                      <strong className="hidden lg:flex text-lg text-gray-500">
                        {cartItem.price}
                      </strong>
                    </div>
                  </div>

                  <div className="flex gap-7 md:gap-10 items-center justify-center mt-7 sm:mt-0 ">
                    <div className="flex gap-4 font-bold">
                      <button
                        onClick={() => increaseItemQuantity(cartItem)}
                        className="text-green-500 hover:text-green-500"
                      >
                        <Plus size={22} weight="bold" />
                      </button>
                      <p className="text-gray-300">{cartItem.quantity}</p>
                      <button
                        onClick={() => decreaseItemQuantity(cartItem)}
                        className="text-green-500 hover:text-green-500"
                      >
                        <Minus size={22} weight="bold" />
                      </button>
                    </div>

                    <strong className=" text-lg font-extrabold text-gray-200 sm:mt-0">
                      {cartItem.price}
                    </strong>

                    <button
                      onClick={() => removeCart(cartItem.id)}
                      className="text-red-500 hover:text-red-600 lg:ml-8 "
                    >
                      <Trash size={24} weight="bold" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-h-72 flex flex-col bg-slate-500/10 p-8">
              <section className="flex flex-col gap-2 mb-14">
                <div className="flex items-center gap-20 justify-between">
                  <span className="text-lg text-gray-300">Quantidade</span>
                  <p className="text-lg text-gray-300">
                    {quantity} {quantity === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <div className="flex justify-between items-center gap-20 font-bold">
                  <span className="text-lg text-gray-300">Valor Total</span>
                  <p className="text-lg md:text-xl text-gray-100">
                    {formattedTotal}
                  </p>
                </div>
              </section>

              <button
                onClick={handleBuyProduct}
                className="w-full h-16 bg-green-500 text-white text-lg rounded-lg font-bold disabled:opacity-60 disabled:cursor-not-allowed hover:bg-green-300 "
              >
                Finalizar compra
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
