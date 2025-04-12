import { useState } from "react"
import { Main,  SectionBelive, Films, Photos, Reviews, Contact } from "../components"
import { base } from "./dataBase/base"
import logo from "../src/assets/img/LogoSerendipiaWeddings.png"
import {Instagram, TikTok, Whatsapp} from "../src/svg"

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
      <header>
           
              <div className="header">
                <div className="overlay">
                  <nav className="nav">
                    <div>
                      <button onClick={changeLenguage} className="btn-lenguage">{lenguage}</button>
                    </div>
                    <div>
                      <a href="#"><Instagram/></a>
                      <a href="#"><TikTok/></a>
                      <a href="#"><Whatsapp/></a>
                     </div>                 
                      
                    </nav>
                   <img className="header__img" src={logo}  alt="Serendipia Logo" />
                  <p className="header__texto">Film & Photo</p>
                
                  <div className="header__button">
                    <a href="#">{
       textos[0] && textos[0].headingButton !== 'undefined' 
      ? textos[0].headingButton 
      : "Find out more"
      } </a> 
                  </div>
                </div>
              </div>
          </header>      
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
      <Reviews/>
      <Contact/>
    </>
  )
}

export default App
