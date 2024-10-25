// General components

// Page components
import Categories from './components/Categories'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Xmas from './components/Xmas'
import Hero from './components/Hero'

function Home () {
  return (
    <div className=' w-full'>
      <section className='w-full'>
        <div className='w-full'>
          <Hero />
        </div>
        <div className=' h-96 w-full sm:flex pb-2'>
          <div className='w-full h-1/2 sm:h-full sm:w-1/2 p-2 '>
            <Xmas />
          </div>
          <div className='w-full h-1/2 sm:h-full sm:w-1/2 p-2'>
            <Blog />
          </div>
        </div>
        <div className='w-full z-10'>
          <Achievements />
        </div>
        <div className='w-full z-10 mb-20'>
          <Categories />
        </div>
      </section>
    </div>
  )
}

export default Home
