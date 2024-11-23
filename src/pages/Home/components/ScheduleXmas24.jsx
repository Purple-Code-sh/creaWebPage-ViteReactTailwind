import scheduleFirstDay from '../../../assets/scheduleFirstDay.png'
import scheduleSecondDay from '../../../assets/scheduleSecondDay.png'
import logoRobochallenge from '../../../assets/logo_robochallenge.jpg'
import logoRobotics from '../../../assets/logo_robotics.jpg'
import logoXpertMe from '../../../assets/logo_xpertMe.jpg'

const ScheduleXmas24 = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 '>
        <img src={scheduleFirstDay} alt='' className='w-full h-auto' />
        <img src={scheduleSecondDay} alt='' className='w-full h-auto' />
      </div>
      <div className='grid grid-cols-3 -mx-6 mt-16 lg:mt-28 gap-6 md:gap-32 lg:gap-44 2xl:gap-52 '>
        <img src={logoRobochallenge} alt='RoboChallenge logo' className='w-full h-auto opacity-80 ' />
        <img src={logoRobotics} alt='Robotics by Olami ORT logo' className='w-full h-auto opacity-80 ' />
        <img src={logoXpertMe} alt='XpertMe logo' className='w-full h-auto opacity-80 ' />
      </div>
    </>
  )
}

export default ScheduleXmas24
