import { PropsWithChildren, useState } from 'react'
import './App.css'

interface Props extends PropsWithChildren {
  name: string
}
function App(props:Props) {
  // из хуков ток юзстейт и юзреф можно типизровать
  const [count, useCount] = useState<number>(0)

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('idf');
    
  }

  return (
    <>
    <button onClick={onClick}>Click</button>
    </>
  )
}

export default App
