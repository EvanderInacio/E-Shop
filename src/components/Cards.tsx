import { Article, CreditCard, Lock, Truck } from "phosphor-react";

export function Card() {
  return (
    <div className="my-10 flex flex-col gap-7 lg:flex-row items-center justify-center md:justify-around">
      <div className="flex items-center gap-3">
        <div className="p-2 border-2 border-green-500 rounded-full">
          <CreditCard className="text-green-400" size={48} />
        </div>
        <div className="font-secondary flex flex-col justify-center items-start">
          <h1 className="font-semibold text-xl text-white">Parcelamento</h1>
          <span className="text-base font-normal text-gray-400">Em até 12x nos Cartões</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 border-2 border-green-500 rounded-full">
          <Article className="text-green-400" weight="fill" size={48} />
        </div>
        <div className="font-secondary flex flex-col justify-center items-start">
          <h1 className="font-semibold text-xl text-white">Boleto e Pix</h1>
          <span className="text-base font-normal text-gray-400">com 10% de Desconto</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 border-2 border-green-500 rounded-full">
          <Truck className="text-green-400" size={48} />
        </div>
        <div className="font-secondary flex flex-col justify-center items-start">
          <h1 className="font-semibold text-xl text-white">Entrega garantida</h1>
          <span className="text-base font-normal text-gray-400">em todo o Brasil.</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2 border-2 border-green-500 rounded-full">
          <Lock className="text-green-400" weight="fill" size={48} />
        </div>
        <div className="font-secondary flex flex-col justify-center items-start">
          <h1 className="font-semibold text-xl text-white">Compra Segura</h1>
          <span className="text-base font-normal text-gray-400">Seus dados protegidos</span>
        </div>
      </div>
    </div>
  )
}
