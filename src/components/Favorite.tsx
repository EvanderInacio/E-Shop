import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { useCart } from '@/contexts/CartContext'
import { ButtonFavorite } from './ButtonFavorite'
import { X } from 'phosphor-react'

export function Favorite() {
  const { favoriteItems, removeFavorite } = useCart()
  const quantity = favoriteItems.length

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

          <section className="flex flex-col h-full overflow-y-auto">
            {quantity <= 0 && (
              <div className="flex flex-col items-center">
                <Image
                  width={200}
                  height={200}
                  src={'/buy2.svg'}
                  alt="Carrinho de compra"
                />
                <p className="text-gray-400 text-lg">
                   Favoritos está vazia 😞
                </p>
              </div>
            )}

            {favoriteItems.map(favorite => (
              <div
                key={favorite.id}
                className="w-full h-20 flex gap-5 mb-4 items-center"
              >
                <Image
                  className="w-24 h-20 bg-slate-500/10 flex items-center justify-center rounded-lg object-contain p-2"
                  width={100}
                  height={100}
                  src={favorite.imageUrl}
                  alt={favorite.name}
                />

                <div className="flex flex-col">
                  <p className="text-gray-300 text-xl mb-2">{favorite.name}</p>
                  <button
                    onClick={() => removeFavorite(favorite.id)}
                    className="text-red-400 hover:text-red-500 text-start"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
