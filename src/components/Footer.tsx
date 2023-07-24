import Link from 'next/link'
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'

export function Footer() {
  return (
    <div className="pt-16 main-footer flex flex-wrap flex-col justify-center w-full">
      <img src={'/wave.svg'} alt="waves" className="w-full" />
      <div className="container flex flex-col sm:flex-row justify-around bg-slate-500/10 min-w-full pb-5 ">
        <div className="flex flex-col px-2 items-start mb-5">
          <h1 className="pb-2 text-6xl font-bold text-white">
            <span className="text-green-300">E-</span>Shop
          </h1>
          <input
            className="py-2 p-2 text-sm bg-white rounded shadow-lg border border-gray-300  mb-3 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent "
            type="email"
            placeholder="Enter your email"
          />
          <button className=" w-2/4 p-1 bg-green-500 border-0 text-white rounded-lg hover:bg-green-300">
            Suscribe
          </button>
        </div>

        <div className="flex flex-col m-5 justify-center ">
          <p className="yt ">
            <a
              href="https://www.youtube.com/"
              className=" text-white px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <YoutubeLogo size={32} weight="bold" />
            </a>

            <a
              href="https://www.facebook.com/"
              className=" text-white  px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded"
            >
              <FacebookLogo size={32} weight="bold" />
            </a>

            <a
              href="http://www.instagram.com/"
              className="text-white px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <InstagramLogo size={32} weight="bold" />
            </a>

            <a
              href="https://wwww.twitter.com"
              className="text-white px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <TwitterLogo size={32} weight="bold" />
            </a>
          </p>
        </div>
      </div>
      <div className="text-center py-1 text-gray-400 bg-slate-500/20 w-full">
        Copyright © Team E-Shop. All Rights Reserved
      </div>
    </div>
  )
}
