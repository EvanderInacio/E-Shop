import { useCart } from "@/contexts/CartContext";
import { Heart } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function ButtonFavorite({...rest}: ButtonProps) {
  const { favoriteItems } = useCart()
  const quantity = favoriteItems.length

  return (
    <button className="relative" {...rest}>
      {quantity > 0 && (
          <span 
            className="bg-red-500 text-white font-semibold rounded-full p-2 w-5 h-5 absolute bottom-[1.35rem] left-[1.35rem] items-center flex justify-center"
          >
            {quantity}{' '}
          </span>
        )}
      <Heart
        size={35} 
        weight="bold" 
        className="text-slate-300 hover:text-gray-400" 
      />
    </button>
  )
}