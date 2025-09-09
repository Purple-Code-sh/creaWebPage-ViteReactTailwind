import achievements from '../assets/achievements2.png'
import { Link } from 'react-router-dom'

export default function Achievements () {
  return (
    <div className='pt-20 bg-gradient-to-b to-bg_purple/75 from-black'>
      <section className='container mx-auto px-4 '>

        <h2 className='font-bold sm:text-lg md:text-xl lg:text-2xl tracking-wide cursor-pointer hover:text-primary active:text-secondary w-fit mx-auto'>
          <Link to='/creaWebPage-ViteReactTailwind/about' className='cursor-pointer'>
            Nuestros logros
          </Link>
        </h2>
        <div className='h-40 lg:h-56 2xl:h-64 flex place-content-center pb-4'>
          <Link to='/creaWebPage-ViteReactTailwind/about' className=' cursor-pointer h-full'>
            <img src={achievements} alt='' className=' h-full' />
          </Link>
        </div>
      </section>
    </div>
  )
}
