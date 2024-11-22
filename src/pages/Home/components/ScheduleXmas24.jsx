import scheduleFirstDay from '../../../assets/scheduleFirstDay.png'
import scheduleSecondDay from '../../../assets/scheduleSecondDay.png'
const ScheduleXmas24 = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20'>
      <img src={scheduleFirstDay} alt='' className='w-full h-auto' />
      <img src={scheduleSecondDay} alt='' className='w-full h-auto' />
    </div>
  )
}

export default ScheduleXmas24
