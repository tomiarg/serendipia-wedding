
import { useState } from "react"

import corazonNegro from "../src/assets/img/CorazonNegro.png"
import martinProfile from "../src/assets/img/mRojasProfile.webp"

export const Main = ({mainHead, mainText, mainAbout}) => {
  const [aboutUs, setAboutUs] = useState(false)
  const [more, setMore] = useState("v")

  const onAboutUs = ()=>{
    if(!aboutUs){
      setAboutUs(true)
      setMore("^")
    }else{
      setAboutUs(false)
      setMore("v")      
    }
  }


  return (
    <main className="main">
     <div className="overlay overlay--main">
      <div className="main__text">
        <h2>{mainHead}</h2>
        <p>{mainText}</p>
          
        {
          aboutUs ?  <div><h3>About Us</h3>
          <img src={martinProfile} alt="Martin Rojas" className="main__imgProfile"/>
          <p>{mainAbout}</p></div> : <div></div>

        }
        <button onClick={onAboutUs} className="main__btn"><p className="main__V">{more}</p><p className="main__Vv">{more}</p><p className="main__Vvv">{more}</p></button>
      </div>
      <img className="main__img" src={corazonNegro} alt="" />
     </div>
    </main>
  )
}
