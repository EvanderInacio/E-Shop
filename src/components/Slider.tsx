import { useState } from 'react'
import data from '@/data/Sliders'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : prevSlide => prevSlide - 1
    )
  }

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : prevSlide => prevSlide + 1
    )
  }

  return (
    <div className="relative mb-20">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map(image => (
          <div
            key={image.id}
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="px-1 slide-texts container mx-auto flex flex-col items-start justify-center h-full gap-5 text-violet-50">
              <h1
                className="text-lg lg:text-7xl text-violet-50 font-bold space-font 
              w-4/5 uppercase"
              >
                {image.title}
              </h1>

              <p className="sm:w-3/5 text-sm sm:text-lg w-full">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="btns absolute w-screen justify-center bottom-8 m-auto z-[1] text-white text-2xl flex gap-10 ">
        <button
          onClick={prevSlide}
          className="prev-btn w-14 h-12 lg:h-14 lg:w-20 flex justify-center items-center bg-green-500 text-white border border-green-600 hover:bg-green-300 hover:text-gray-200 duration-300"
        >
          <span>
            <ArrowLeft size={32} weight="bold" />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn w-14 h-12 lg:h-14 lg:w-20 flex justify-center items-center bg-green-500 text-white border border-green-600 hover:bg-green-300 hover:text-gray-200 duration-300"
        >
          <span>
            <ArrowRight size={32} weight="bold" />
          </span>
        </button>
      </div>
    </div>
  )
}
