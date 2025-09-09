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
    <div className='text-white bg-black overflow-x-hidden font-sans font-light'>
      <Hero />
      <div className='flex items-center justify-center mb-12'>
        <Countdown />
      </div>
      <ScheduleXmas24 />

      <div className='container mx-auto h-fit sm:flex pb-2'>
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
      <Categories />
    </div>
  )
}

export default Home
