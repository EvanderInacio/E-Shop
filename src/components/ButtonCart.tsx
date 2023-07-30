import Link from "next/link";
import { Handbag } from "phosphor-react";

export function ButtonCart( ) {
  return (
    <Link href={'/cart'}>
    <Handbag 
        size={35} 
        weight="bold" 
        className="text-slate-300 hover:text-gray-400" 
      />
    </Link>
  )
}