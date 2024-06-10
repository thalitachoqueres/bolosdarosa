import type { StaticImageData } from 'next/image'
import prestigio from '../../public/prestigio.png'
import morango from '../../public/morango.png'
import kitkat from '../../public/kitkat.png'
import pote from '../../public/pote.png'

export interface ICake {
  name: string
  description: string
  price: string
  image: StaticImageData
}

export const cakes: ICake[] = [
  {
    name: 'Bolo de morango',
    description:
      'Bolo de morango com chocolate, decorado com brigadeiros e morangos',
    price: 'R$ 79,90',
    image: morango,
  },
  {
    name: 'Bolo prestigio',
    description: 'Bolo de brigadeiro com recheio de coco',
    price: 'R$ 69,90',
    image: prestigio,
  },
  {
    name: 'Bolo kit kat',
    description:
      'Perfeito para a crinçada! bolo de coco com decoração de kit kat e M&Ms',
    price: 'R$ 89,90',
    image: kitkat,
  },
  {
    name: 'Bolo de pote',
    description: 'Recheios de chocolate, doce de leite, morango e oreo',
    price: 'R$ 15,90',
    image: pote,
  },
]
