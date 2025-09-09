import React from 'react'
import { Link } from 'react-router-dom'
import creaLogo from '../assets/creaLogo_alt.png'
import DropDownMenu from './DropDownMenu'

export default function Header () {
  return (
    <div className='opacity-90 px-4 py-1 flex place-items-center h-full relative max-w-full'>
      <button className='h-full flex-shrink-0'>
        <Link to='/creaWebPage-ViteReactTailwind/' className='h-full'>
          <img src={creaLogo} alt='CREA Logo' className='h-full' />
        </Link>
      </button>
      <div className='absolute right-6 visible sm:collapse ml-auto'>
        <DropDownMenu />
      </div>
      <div className=' collapse sm:visible flex flex-auto overflow-x-hidden'>
        <div className='flex-auto text-center text-xl lg:text-2xl text-bg_purple md:tracking-[.2em] lg:tracking-[.3em] xl:tracking-[.5em] 2xl:tracking-[.7em] opacity-75 uppercase invisible md:visible'>
          Club de Robótica
        </div>
        <div className='flex flex-shrink-0 justify-end pr-4 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          <button className='hover:text-primary active:text-secondary '>
            <h3>Contacto</h3>
          </button>
          <button className='ml-10 hover:text-primary active:text-secondary'>
            <h3>Torneos</h3>
          </button>
          <button className='font-semibold ml-10 hover:text-primary active:text-secondary'>
            <Link to='/creaWebPage-ViteReactTailwind/about' className='h-full'>
              <h3>¿Quiénes somos?</h3>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
