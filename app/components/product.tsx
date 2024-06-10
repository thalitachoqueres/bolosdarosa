import Image from 'next/image'
import { ICake } from '../cake-data/cakes'

interface Props {
  data: ICake
}

const product = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-center rounded-sm bg-white p-8 shadow-[0px_5px_13px_0px_#2f415833] md:flex-row">
      <Image
        src={data.image}
        className="mb-3 rounded-b-xl rounded-t-[45%] md:mb-0"
        alt="bolo"
      />

      <div className="flex min-w-80 flex-col items-center md:ml-12 md:items-start">
        <h1 className="text-2xl font-bold text-[#EA008C] md:text-left md:text-3xl">
          {data.name}
        </h1>

        <h1 className="mt-3 max-w-60 text-center text-sm text-[#6D6875] md:text-left md:text-xl">
          {data.description}
        </h1>
      </div>

      <div className="mt-4 flex w-full grow flex-col items-center justify-end gap-4 self-end text-sm md:mt-0 md:flex-row md:gap-6">
        <h1 className="text-center text-sm text-[#6D6875] md:text-left md:text-lg">
          A partir de {data.price}
        </h1>
        <button className="w-full rounded-md bg-[#EA008C] px-4 py-2 text-white md:w-auto md:px-10 md:py-4">
          Comprar
        </button>
      </div>
    </div>
  )
}

export default product
