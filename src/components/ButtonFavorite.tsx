import { Heart } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function ButtonFavorite({ ...rest }: ButtonProps ) {
  return (
    <button className="" {...rest}>
      <Heart
        size={35} 
        weight="bold" 
        className="text-slate-300 hover:text-gray-400" 
      />
    </button>
  )
}