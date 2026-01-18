import { ArrowUpRight } from "lucide-react"

const Leftcontent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>
        <div className='p-6'>
            <h3 className='mb-7 text-5xl font-bold leading-[1.2]'>Prospective <br/> <span>Customer</span> <br/> Segmentation </h3>
            <p className='text-xl font-medium text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat velit veniam laboriosam possimus. Impedit porro quaerat eligendi.</p>
        </div>
        <div className='text-8xl '>
           <ArrowUpRight size={80} /> 
        </div>
      
    </div>
  )
}

export default Leftcontent
