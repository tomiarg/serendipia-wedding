import { useState } from "react"
import { Main, Heading, SectionBelive, Films } from "../components"
import { base } from "./dataBase/base"

function App() {
  const [spanish, setSpanish ] = useState(true)
  const [lenguage, setLenguage] = useState("spanish")
  const [textos, setTextos] = useState({})

  const changeLenguage = ()=>{
    setSpanish(!spanish)
    if (spanish){
      setLenguage("spanish")
    } else{
      setLenguage("english")
    }
    lenguageBase()
    console.log(spanish)
    console.log(textos[0].headingButton)
  }
  
  const lenguageBase = ()=>{
    if(lenguage === "spanish"){
     setTextos(base.filter(e=>e.lenguaje === "spanish"))
    }else{
      setTextos(base.filter(e=>e.lenguaje === "english"))
    }
    console.log(textos)
   
  }

  return (
    <>
      <button onClick={changeLenguage}>{lenguage}</button>
      <Heading headingButton={textos[0].headingButton}/>
      <Main/>
      <SectionBelive/>
      <Films/>
    </>
  )
}

export default App
