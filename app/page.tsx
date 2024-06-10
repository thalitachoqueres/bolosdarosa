import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'

import Product from './components/product'
import { cakes } from './cake-data/cakes'

import cakePic from '../public/bolo.png'

export default function Home() {
  return (
    <main>
      {/* SECTION 1 */}
      <div className="flex h-[calc(100vh_-_12rem)] flex-col items-center justify-between gap-10 md:h-fit md:flex-row md:gap-20">
        <div className="flex h-fit w-3/4 flex-col gap-6">
          <div>
            <h1 className="text-center text-3xl font-bold tracking-tighter text-[#EA008C] md:text-start md:text-6xl">
              Bolos caseiros
              <span className="text-center text-3xl font-bold tracking-tighter text-[#6D6875] md:text-6xl">
                {' '}
                para adoçar seu dia
              </span>
            </h1>
          </div>
          <span className="text-center text-[14px] text-[#6D6875] md:text-start md:text-xl">
            Bem-vindo ao Bolos da Rosa! Utilizamos ingredientes premium e
            combinamos com criatividade para colocar os pequenos detalhes para
            satisfazer o seu desejo.
          </span>
        </div>

        <div className="h-fit w-2/3 md:w-fit">
          <Image
            className="rounded-b-2xl rounded-t-[45%]"
            src={cakePic}
            alt="bolo"
          />
        </div>

        <div className="flex flex-col items-center justify-center md:hidden">
          <IoIosArrowDown
            color="#EA008C"
            size={20}
            className="animate-bounce"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mt-24 md:mt-20">
        <h2 className="mb-8 text-4xl text-[#6D6875] md:mb-12">Cardápio</h2>
      </div>

      <div className="flex w-full flex-col gap-8 px-8 md:px-0">
        {cakes.map((cake) => (
          <Product key={cake.name} data={cake} />
        ))}
      </div>
    </main>
  )
}
