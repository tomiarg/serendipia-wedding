import { useState } from "react"
import { Main, Heading, SectionBelive, Films, Photos } from "../components"
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
      <Heading  headingButton={
       textos[0] && textos[0].headingButton !== 'undefined' 
      ? textos[0].headingButton 
      : "Find out more"
      }  />
      <Main mainHead={
       textos[0] && textos[0].mainHeading !== 'undefined' 
      ? textos[0].mainHeading 
      : base[0].mainHeading} mainText ={textos[0] && textos[0].mainText !== 'undefined' 
        ? textos[0].mainText
        : base[0].mainText
      } />
      <SectionBelive beliveHead ={textos[0] && textos[0].beliveHeading !== 'undefined' 
        ? textos[0].beliveHeading
        : base[0].beliveHeading
      } beliveLi={textos[0] && textos[0].beliveLi !== 'undefined' 
        ? textos[0].beliveLi
        : base[0].beliveLi
      }/>
      <Films/>
      <Photos/>
    </>
  )
}

export default App
