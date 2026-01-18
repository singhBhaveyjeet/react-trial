import { ArrowRight } from "lucide-react"

const Rightcardcontent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
         <h2 className='bg-white rounded-full h-8 w-8 flex justify-center items-center text-xl font-semibold text-shadow-black'>{props.id+1}</h2>
         <div className=''>
            <p className='text-lg leading-[1.6] mb-10 text-white text-shadow-black ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, praesentium. Qui earum optio excepturi et?</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' font-semibold px-5 py-2 rounded-full text-xl text-white '>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-4 py-4 rounded-full text-lg '><ArrowRight size={18} /></button>
            </div>
         </div>
      </div>
  )
}

export default Rightcardcontent
