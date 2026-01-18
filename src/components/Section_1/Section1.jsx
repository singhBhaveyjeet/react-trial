import Navbar from "./Navbar"
import Page1text from "./Page1text"

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1text users={props.users} />
    </div>
  )
}

export default Section1
