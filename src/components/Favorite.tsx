import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { Minus, Plus, X } from 'phosphor-react'
import { ButtonFavorite } from './ButtonFavorite'

export function Favorite() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonFavorite />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="fixed top-0 right-0 bottom-0 w-full max-w-[30rem] bg-gray-800 p-12 pt-16 shadow-2xl shadow-black flex flex-col z-50">
          <Dialog.Close className="absolute top-7 right-7">
            <X
              size={24}
              weight="bold"
              className="text-gray-300 hover:text-gray-400 cursor-pointer"
            />
          </Dialog.Close>

          <h2 className="font-bold text-4xl text-violet-550 pt-2 mb-10 flex items-center">
            <Image
              className="hidden sm:flex"
              width={70}
              height={70}
              src={'/favorite.svg'}
              alt="Sacola de compra"
            />{' '}
            Favoritos
          </h2>

          <section>
            {/* <div className="flex flex-col items-center">
              <Image
                width={200}
                height={200}
                src={'/buy2.svg'}
                alt="Carrinho de compra"
              />
              <p className="text-gray-400 text-lg">
                Ops! Parece que seus favoritos está vazia 😞
              </p>
            </div> */}

            <div className="w-full h-20 flex gap-5 items-center ">
              <Image
                className="w-24 h-20 bg-slate-500/10 flex items-center justify-center rounded-lg object-contain"
                width={100}
                height={100}
                src={'/cart.svg'}
                alt=""
              />

              <div className="flex flex-col justify-center text-center items-center">
                <p className="text-gray-300 text-xl">Produto</p>
                <button className="text-green-400 hover:text-green-500">Remover</button>
              </div>
            </div>
          </section>

          <div className="mt-auto">
            <button className="w-full h-16 bg-green-500 text-white text-lg rounded-lg font-bold disabled:opacity-60 disabled:cursor-not-allowed hover:bg-green-300 ">
              Adicionar ao carrinho
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
