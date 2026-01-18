import Section1 from './components/Section_1/Section1'
import Section2 from './components/Section_2/Section2'

const App = () => {

  const users = [
    { img:'https://plus.unsplash.com/premium_photo-1672691612351-7473de67b85c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'Satisfied',
      color:'royalblue'
    },
    { img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'Underserved',
      color:'seagreen'
    },
    { img:'https://images.unsplash.com/photo-1696453424412-fe6ea4b2db54?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'Underbanked',
      color:'red'
    },
    { img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'Undersuspect',
      color:'brown'
    },
    { img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag:'Underwork',
      color:'darkgreen'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
