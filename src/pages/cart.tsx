import Head from 'next/head'
import Image from 'next/image'
import { Minus, Plus, Trash, X } from 'phosphor-react'

export default function Cart() {
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
              {/* <div className="flex flex-col items-center">
                <Image
                  width={200}
                  height={200}
                  src={'/buy.svg'}
                  alt="Carrinho de compra"
                />
                <p className="text-gray-400 text-lg">
                  Ops! Parece que a sua sacola está vazia 😞
                </p>
              </div> */}

              <div className="flex flex-col sm:flex-row mb-4 px-4 py-8 justify-between items-center border-y border-gray-400">
                <div className="flex gap-3">
                  <Image
                    className="w-24 h-20 bg-slate-500/10 flex items-center justify-center rounded-lg object-contain"
                    width={100}
                    height={100}
                    src={'/cart.svg'}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-gray-200 text-xl max-w-[15rem]">
                      Produto de teste para ver ate onde via
                    </p>
                    <strong className="hidden lg:flex text-lg text-gray-500">
                      R$ 50,00
                    </strong>
                  </div>
                </div>

                <div className="flex gap-7 md:gap-10 items-center justify-center mt-7 sm:mt-0 ">
                  <div className="flex gap-4 font-bold">
                    <button className="text-green-500 hover:text-green-500">
                      <Plus size={22} weight="bold" />
                    </button>
                    <p className="text-gray-300">10</p>
                    <button className="text-green-500 hover:text-green-500">
                      <Minus size={22} weight="bold" />
                    </button>
                  </div>

                  <strong className=" text-lg font-extrabold text-gray-200 sm:mt-0">
                    R$ 50,00
                  </strong>

                  <button className="text-red-500 hover:text-red-600 lg:ml-8 ">
                    <Trash size={24} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            <div className="max-h-72 flex flex-col bg-slate-500/10 p-8">
              <section className="flex flex-col gap-2 mb-14">
                <div className="flex items-center gap-20 justify-between">
                  <span className="text-lg text-gray-300">Quantidade</span>
                  <p className="text-lg text-gray-300">2 items</p>
                </div>
                <div className="flex justify-between items-center gap-20 font-bold">
                  <span className="text-lg text-gray-300">Valor Total</span>
                  <p className="text-lg md:text-xl text-gray-100">R$ 100,00</p>
                </div>
              </section>

              <button className="w-full h-16 bg-green-500 text-white text-lg rounded-lg font-bold disabled:opacity-60 disabled:cursor-not-allowed hover:bg-green-300 ">
                Finalizar compra
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
