import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex gap-12 py-8 justify-center items-center">
      <div className="bg-slate-400 rounded-lg p-1 cursor-pointer relative flex items-center justify-center">
        <Link href={''} className="">
          <Image
            className="object-cover"
            width={500}
            height={420}
            src={'/teste.svg'}
            alt=""
          />
          <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-zinc-950/90 p-7">
            <strong className="text-lg text-white font-semibold">
              Camiseta
            </strong>
            <span className="text-xl font-bold text-green-300">R$ 79,00</span>
          </footer>
        </Link>
      </div>

      <div className="bg-slate-400 rounded-lg p-1 cursor-pointer relative flex items-center justify-center">
        <Link href={''} className="">
          <Image
            className="object-cover"
            width={500}
            height={420}
            src={'/teste.svg'}
            alt=""
          />
          <footer className="absolute bottom-1 left-1 right-1 rounded-md flex items-center justify-between bg-zinc-950/90 p-7">
            <strong className="text-lg text-white font-semibold">
              Camiseta
            </strong>
            <span className="text-xl font-bold text-green-300">R$ 79,00</span>
          </footer>
        </Link>
      </div>
    </div>
  )
}
