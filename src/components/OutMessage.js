import moment from 'moment'

export const OutMessage = ({msg}) => {

  const hora = moment(moment(msg.createdAt).utcOffset(-5)).format('H:mm a | MMMM D')

  return (
    <div className="overflow-hidden mx-0 my-3">
      <div className="float-right w-1/2">
        <p className='bg-[#7674fe] rounded text-sm m-0 text-white px-2 py-4 w-full'>{msg.mensaje}</p>
        <span className="time_date"> {hora}</span>
      </div>
    </div>
  )
}
