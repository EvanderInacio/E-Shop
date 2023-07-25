import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'

export function Header() {
  return (
    <header className="pt-8 mb-8 px-4 w-full flex items-center justify-around">
      <Link href={'/'}>
        <div className="text-white flex items-center gap-2 text-center">
          <Image width={50} height={50} src={'/logo.svg'} alt="Logo" />
          <h2 className="font-extrabold text-3xl">
            <span className="text-green-300">E-</span>Shop
          </h2>
        </div>
      </Link>

      <div className="text-white">
        <Handbag size={35} weight="bold" />
      </div>
    </header>
  )
}
