import Image from 'next/image'

export function Photos() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center mt-5 px-2 md:px-24 lg:px-28 xl:px-36 2xl:px-56">
          <div className="relative px-2 md:px-0 flex flex-col justify-center items-center h-full gap-2 w-full md:gap-4">
            <div className="flex gap-2 w-full md:gap-4">
              <div className="w-8/12 relative grayscale hover:grayscale-0 transition-all group duration-500 ease-in-out dark:ring-offset-slate-900">
                <Image
                  className="object-cover flex justify-center h-full items-center w-full rounded-2xl brightness-50 group-hover:brightness-100 transition-all group duration-500 ease-in-out "
                  src="/tv.jpg"
                  alt="all"
                  layout="fill"
                />
              </div>
              <div className="w-4/12 relative grayscale hover:grayscale-0 transition-all group duration-500 ease-in-out dark:ring-offset-slate-900">
                <Image
                  className="object-cover w-full rounded-2xl brightness-50 group-hover:brightness-100 transition-all group duration-500 ease-in-out"
                  src="/videogame.jpg"
                  alt="kids"
                  width="0"
                  layout="responsive"
                  height="0"
                />
              </div>
            </div>
            <div className="flex gap-2 w-full md:gap-4">
              <div className="w-2/4 relative grayscale hover:grayscale-0 transition-all group duration-500 ease-in-out dark:ring-offset-slate-900">
                <Image
                  className="object-cover w-full rounded-2xl brightness-50 group-hover:brightness-100 transition-all group duration-500 ease-in-out"
                  src="/celular.jpg"
                  layout="responsive"
                  width="0"
                  alt="men"
                  height="0"
                />
              </div>
              <div className="w-2/4 relative grayscale hover:grayscale-0 transition-all group duration-500 ease-in-out dark:ring-offset-slate-900">
                <Image
                  className="object-cover w-full rounded-2xl brightness-50 group-hover:brightness-100 transition-all group duration-500 ease-in-out"
                  src="/fone.jpg"
                  layout="responsive"
                  width="0"
                  alt="women"
                  height="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
