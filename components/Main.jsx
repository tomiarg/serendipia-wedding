
import { useState } from "react"

import corazonNegro from "../src/assets/img/CorazonNegro.png"
import martinProfile from "../src/assets/img/mRojasProfile.webp"

export const Main = ({mainHead, mainText}) => {
  const [aboutUs, setAboutUs] = useState(false)
  const [more, setMore] = useState("more")

  const onAboutUs = ()=>{
    if(!aboutUs){
      setAboutUs(true)
      setMore("less")
    }else{
      setAboutUs(false)
      setMore("more")      
    }
  }


  return (
    <main className="main">
     <div className="overlay overlay--main">
      <div className="main__text">
        <h2>{mainHead}</h2>
        <p>{mainText}</p>
          <button onClick={onAboutUs} className="main__btn">Read {more}</button>
        {
          aboutUs ?  <div><h3>About Us</h3>
          <img src={martinProfile} alt="Martin Rojas" className="main__imgProfile"/>
          <p>¡Hola! Mi nombre es Martín Rojas, y estoy encantado de darles la bienvenida a mi mundo de artes visuales… Mi camino hacia la fotografía ha sido una aventura fascinante que me ha llevado a descubrir lugares increíbles y a conocer personas que ahora considero familia…
          Durante más de una década, he perfeccionado mi arte, centrándome en el emocionante mundo de las bodas.</p>
          <p>Desde la mágica Riviera Maya hasta los espectaculares paisajes de la Patagonia Argentina, he tenido el privilegio de documentar el amor en todas sus formas y en los rincones más remotos del mundo. Mis viajes también me han llevado a destinos exóticos como Nueva Zelanda y Australia, donde he tenido el honor de capturar momentos preciosos para parejas de diversas culturas.</p></div> : <div></div>

        }
      </div>
      <img className="main__img" src={corazonNegro} alt="" />
     </div>
    </main>
  )
}
