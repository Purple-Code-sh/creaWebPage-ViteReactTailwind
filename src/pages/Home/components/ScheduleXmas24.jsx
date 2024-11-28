import scheduleFirstDay from '../../../assets/scheduleFirstDay.png'
import scheduleSecondDay from '../../../assets/scheduleSecondDay.png'
import PartnersLogos from '../../../components/PartnersLogos'

const ScheduleXmas24 = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 -mt-4'>
        <img src={scheduleFirstDay} alt='' className='w-full h-auto' />
        <img src={scheduleSecondDay} alt='' className='w-full h-auto' />
      </div>
      <div className='mt-16 mx-0 md:mx-10 lg:-mx-6 lg:mt-24'>
        <PartnersLogos />
      </div>
    </>
  )
}

export default ScheduleXmas24
