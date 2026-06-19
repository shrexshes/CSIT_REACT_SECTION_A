import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import HeroText from './components/HeroText'
import ApiSetUp from './components/ApiSetUp'

function App() {
  const [showApiSetUp,setShowApiSetUp]=useState(false)
  const [apiKeyInput,setApiKeyInput]=useState('')
  const [apiKey,setApiKey]=useState("")

  useEffect(()=>{
    if(apiKey){
      localStorage.setItem("apiKey",apiKey)
    }
  },[apiKey])

  const handleApiKeySubmit=(e)=>{
    e.preventDefault()
    if(apiKeyInput){
      setApiKey(apiKeyInput)
      setShowApiSetUp(false)
    }
  }
  
  if(showApiSetUp){
    return(
      <ApiSetUp apiKeyInput={apiKeyInput} setApiKeyInput={setApiKeyInput} onSubmit={handleApiKeySubmit}/>
    )
  }



  return (
    <>
      {/* <h1 className='bg-blue-400 text-9xl underline px-40 py-40 mx-40 my-40 border-8 rounded-full text-pink-400 border-amber-200'>Helo World</h1> */}

      <Header onChangeApiKey={()=>setShowApiSetUp(true)}/>
      <HeroText/>
    </>
  )
}

export default App
