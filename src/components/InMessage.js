import moment from 'moment'


export const InMessage = ({msg}) => {

  const hora = moment(moment(msg.createdAt).utcOffset(-5)).format('H:mm a | MMMM D')
  
  return (
    <>
      <div className="inline-block w-1/12">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="know"
        />
      </div>
      <div className="inline-block py-0 pl-3 align-top w-11/12">
        <div className="w-3/5">
          <p className='bg-[#ebebeb] bg-none rounded text-[#646464] text-sm m-0 px-2 py-4 w-full'>{msg.mensaje}</p>
          <span className="time_date"> 
            {hora}
          </span>
        </div>
      </div>  
    </>
  )
}
