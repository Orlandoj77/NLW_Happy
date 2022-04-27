import { useState } from 'react'
import Header from './Components/Header/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
   <h1>
     <Header/>
     Hello World
   </h1>
  )
}

export default App
