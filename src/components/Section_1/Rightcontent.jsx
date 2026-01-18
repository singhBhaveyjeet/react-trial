import Rightcard from "./Rightcard"


const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-3 flex flex-nowrap overflow-x-auto rounded-4xl '>
        {props.users.map(function(elem,idx){

            return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
        })}
      
    </div>
  )
}

export default Rightcontent
