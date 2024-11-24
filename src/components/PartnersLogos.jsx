import logoRobochallenge from '../assets/logo_robochallenge.jpg'
import logoRobotics from '../assets/logo_robotics.jpg'
import logoXpertMe from '../assets/logo_xpertMe.jpg'
import logoIngenieroMaker from '../assets/logo_ingenieroMaker.jpg'

function PartnersLogos () {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-20 md:gap-24 lg:gap-20 2xl:gap-32 '>
      <img src={logoRobochallenge} alt='RoboChallenge logo' className='w-full h-auto opacity-80 ' />
      <img src={logoRobotics} alt='Robotics by Olami ORT logo' className='w-full h-auto opacity-80 ' />
      <img src={logoXpertMe} alt='XpertMe logo' className='w-full h-auto opacity-80 ' />
      <img src={logoIngenieroMaker} alt='XpertMe logo' className='w-full h-auto opacity-80 ' />
    </div>
  )
}

export default PartnersLogos
