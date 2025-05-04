
import { useState } from "react"
import logoSerendipia from "../src/assets/img/LogoSerendipiaNegro.png"
import { Location, Mail } from "../src/svg"
import { Phone } from "../src/svg/Phone"
import { Form } from "./Form"


export const Contact = () => {
  const [book, setBook] = useState(false)
  
  const onBookClick = ()=>{
    if(!book){
      setBook(true)
    }else{
      setBook(false)     
    }
  }
 
  return (
    <div className="contact">
         <div className="overlay overlay--main">
          <div className="contact__form">
            <h3>We Belive in the magic of spontaneous</h3>
          <div className="contact__flex">
            <div className="contact__texts">
              
              
            <div className="contact__text"><p><Phone/> <a href="tel:+529842540242">+529842540242 </a></p></div>
            <div className="contact__text"><p><Mail/> <a href="mailto:serendipiafilms111@gmail.com">serendipiafilms111@gmail.com</a></p></div>
            <div className="contact__text"><p><Location/> Playa del Carmen, México</p></div> 
        </div>
              <div>
                <img src={logoSerendipia} alt="" className="contact__image" />
                <div ><button className="form__button"  onClick={onBookClick}>Book Now</button></div>
              </div>
            </div>
            {
                  book ? <Form/> : ""
                }
        
          </div>
          
          <footer className="footer"><p>
          Todos los derechos reservados. Web built by <a href="https://somosnene.com.ar/" target="_blank"> www.somosnene.com.ar </a>• Powered by React.
          </p></footer> 

         </div>

         
      </div>
  )
}
