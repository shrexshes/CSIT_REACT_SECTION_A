import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import HeroText from './components/HeroText'
import ApiSetUp from './components/ApiSetUp'
import MoodSelector from './components/MoodSelector'

function App() {
  const [showApiSetUp,setShowApiSetUp]=useState(false)
  const [apiKeyInput,setApiKeyInput]=useState('')
  const [apiKey,setApiKey]=useState("")
  const [customMood,setCustomMood]=useState("")
  const [selectedMood,setSelectedMood]=useState(null)
  const [recipes,setRecipes]=useState([])

  useEffect(()=>{
    if(apiKey){
      localStorage.setItem("apiKey",apiKey)
    }
  },[apiKey])

  
  // shrexshes
  const MOODS = [
    { id: "happy", emoji: "😄", label: "Happy", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", border: "border-yellow-300" },
    { id: "cozy", emoji: "🧸", label: "Cozy", color: "from-amber-400 to-brown-400", bg: "bg-amber-50", border: "border-amber-300" },
    { id: "adventurous", emoji: "🌍", label: "Adventurous", color: "from-green-400 to-teal-500", bg: "bg-green-50", border: "border-green-300" },
    { id: "romantic", emoji: "💕", label: "Romantic", color: "from-pink-400 to-rose-500", bg: "bg-pink-50", border: "border-pink-300" },
    { id: "stressed", emoji: "😤", label: "Stressed", color: "from-purple-400 to-indigo-500", bg: "bg-purple-50", border: "border-purple-300" },
    { id: "sad", emoji: "😔", label: "Sad", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", border: "border-blue-300" },
    { id: "energetic", emoji: "⚡", label: "Energetic", color: "from-red-400 to-orange-500", bg: "bg-red-50", border: "border-red-300" },
    { id: "lazy", emoji: "🛋️", label: "Lazy", color: "from-slate-400 to-gray-500", bg: "bg-slate-50", border: "border-slate-300" },
  ];



  const handleApiKeySubmit=(e)=>{
    e.preventDefault()
    if(apiKeyInput){
      setApiKey(apiKeyInput)
      setShowApiSetUp(false)
    }
  }

  const fetchRecipes=async(moodLabel)=>{
    setRecipes([])

    const prompt=`You are a creative culinary expert. Based on someone feeling ${moodLabel}, rightnow suggest 2 recipe ideas that match their mood. 
    For each recipe , return a JSON object with :
    - name:string(creative recipe name with nepali background or origin)
    - emoji:string(1 fitting emoji)
    - description:string(1 sentence about whyt this recipe fits the mood)
    - difficulty : string("EASY","MEDIUM","HARD")
    - cookTime:string(eg:3mins)
    - ingredients : array of string (4-5 clear ingredients)
    - steps:array of string(5-7 clear cooking steps)

    Return only a valid JSON array of 2 recipes , no markdown , no extra texts
    ` 
  }

  const handleMoodSelect=(mood)=>{
    //this function is used to select the mood from the MOOD json data and if there is anything typed in custom mood then it makes it empty 

    setSelectedMood(mood)
    setCustomMood("")
    console.log(mood.label)

    // TODO : Fetch Recipe from GEMINI
  }

  const handleCustomMoodSubmit=(e)=>{
    e.preventDefault()
    if(customMood){
      setSelectedMood({id:"custom",emoji:"custom",label:customMood})
    }
    // TODO: fetch recipes
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
      <MoodSelector moods={MOODS}/>

    </>
  )
}

export default App
