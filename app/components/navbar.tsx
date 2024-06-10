'use client'

// dependencies
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// icons
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { IoClose, IoMenu } from 'react-icons/io5'

// Images
import cakePic from '../../public/logo.png'

const SocialComponent = () => {
  return (
    <>
      <Link href={'#'}>
        <FaWhatsapp size={20} color="#EA008C" />
      </Link>
      <Link href={'#'}>
        <FaInstagram size={20} color="#EA008C" />
      </Link>
    </>
  )
}

const ListComponent = () => {
  return (
    <>
      <li className="transition-all delay-700 ease-in-out hover:border-b-2 hover:border-[#EA008C]">
        <Link href="/">
          <p>Home</p>
        </Link>
      </li>
      <li className="transition-all delay-700 ease-in-out hover:border-b-[2px] hover:border-[#EA008C]">
        <Link href="/about">
          <p>Sobre nós</p>
        </Link>
      </li>
    </>
  )
}

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  // choose the screen size
  const handleResize = () => {
    if (!(window.innerWidth < 720)) {
      setMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <div
      className={`${menu ? 'h-48 flex-col' : 'h-24'} sticky top-0 z-40 flex w-full justify-between bg-white px-12 py-8 shadow-[0px_1px_5px_0px_#0000004d] transition-all md:items-center md:justify-center`}
    >
      <div
        className={`${menu ? 'items-center' : ''} flex w-full justify-between md:max-w-[1024px]`}
      >
        <div className="flex h-fit">
          <Image
            src={cakePic}
            alt="logo"
            width={50}
            height={50}
            className="mr-10"
          />
          <ul className="hidden items-center gap-x-12 text-[16px] text-slate-900 md:flex">
            <ListComponent />
          </ul>
        </div>

        <div className="hidden items-center gap-x-6 md:flex">
          <SocialComponent />
        </div>

        <div className="md:hidden">
          {menu ? (
            <IoClose size={26} color="#EA008C" onClick={() => setMenu(false)} />
          ) : (
            <IoMenu size={26} color="#EA008C" onClick={() => setMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${!menu && 'hidden'} mt-4 flex flex-col items-center gap-x-12 gap-y-2 text-[16px] text-slate-900 transition-all delay-700 ease-in-out`}
      >
        <ListComponent />
      </ul>
      <div
        className={`${!menu && 'hidden'} mt-3 flex items-center justify-center gap-x-6`}
      >
        <SocialComponent />
      </div>
    </div>
  )
}

export default Navbar
