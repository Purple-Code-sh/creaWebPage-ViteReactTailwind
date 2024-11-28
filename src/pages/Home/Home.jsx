// General components

// Page components
import Categories from './components/Categories'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Xmas from './components/Xmas'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import ScheduleXmas24 from './components/ScheduleXmas24'

function Home () {
  return (
    <div className=' w-full'>
      <section className='w-full'>
        <div className='w-full'>
          <Hero />
        </div>
        <div className='flex items-center justify-center'>
          <Countdown />
        </div>
        <div className='w-full p-12 sm:p-16 md:p-20 lg:p-24 xl:p-32 pt-0  '>
          <ScheduleXmas24 />
        </div>
        <div className='w-full h-fit sm:flex pb-2'>
          <div className='w-full sm:w-1/2 p-2 '>
            <Xmas />
          </div>
          <div className='w-full h-auto sm:w-1/2 p-2'>
            <Blog />
          </div>
        </div>
        <div className='w-full'>
          <Achievements />
        </div>
        <div className='w-full mb-20'>
          <Categories />
        </div>
      </section>
    </div>
  )
}

export default Home
