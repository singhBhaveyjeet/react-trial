
import Rightcardcontent from "./Rightcardcontent"

const Rightcard = (props) => {
  return (
    <div className=' h-full w-70 p-2 rounded-4xl overflow-hidden relative shrink-0'>

      <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt=""></img>
      
      <Rightcardcontent tag={props.tag} id={props.id} color={props.color} />
    </div>
  )
}

export default Rightcard
