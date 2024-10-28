import React from 'react'
import { Link } from 'react-router-dom'
import creaNeedYou from '../assets/creaNeedYou.webp'

export default function Xmas () {
  return (
    <div className=' w-full bg-bg_purple/40 rounded-3xl border-4 border-black'>
      <div className='w-full text-center pt-6'>
        <h2 className='font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-wide'>
          <Link to='/creaWebPage-ViteReactTailwind/xmas' className=' cursor-pointer hover:text-primary active:text-secondary hover:underline '>
            Evento Xmas 2024
          </Link>
        </h2>
        <h4 className=' font-semibold text-sm w-full text-center pt-2 pb-4 tracking-wide'>
          <Link to='/creaWebPage-ViteReactTailwind/xmas' className=' cursor-pointer hover:text-primary active:text-secondary'>
            Más informacion
          </Link>
        </h4>
      </div>
      <div className='h-32 sm:h-80 flex place-content-center pb-4'>
        <Link to='/creaWebPage-ViteReactTailwind/xmas' className=' cursor-pointer h-full'>
          <img src={creaNeedYou} alt='' className=' h-full' />
        </Link>
      </div>
    </div>
  )
}
