import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'
import { Handbag } from 'phosphor-react'

export function ButtonCart() {
  const { cartItems } = useCart()
  const quantity = cartItems.length

  return (
    <Link href={'/cart'}>
      <div className="relative">
        {quantity > 0 && (
          <span 
            className="bg-green-500 text-white font-semibold rounded-full p-2 w-5 h-5 absolute bottom-[1.35rem] left-[1.35rem] items-center flex justify-center"
          >
            {quantity}{' '}
          </span>
        )}
        <Handbag
          size={35}
          weight="bold"
          className="text-slate-300 hover:text-gray-400"
        />
      </div>
    </Link>
  )
}
