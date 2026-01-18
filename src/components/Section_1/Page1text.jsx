import Leftcontent from "./Leftcontent"
import Rightcontent from "./Rightcontent"

const Page1text = (props) => {
  return (
    <div className='py-5 px-16 h-[90vh] gap-10 items-center flex '>
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1text
