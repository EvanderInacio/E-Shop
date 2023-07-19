import Image from 'next/image'

export function Header() {
  return (
    <header className="py-8 px-4 w-full flex items-center justify-between">
      <div className="text-white flex items-center gap-2 text-center">
        <Image width={50} height={50} src={'/logo.svg'} alt="Logo" />
        E-Shop
      </div>

      <div className='text-white'>
        carrinho
      </div>
    </header>
  )
}
