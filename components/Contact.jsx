import logoSerendipia from "../src/assets/img/LogoSerendipiaNegro.png"
import { Location, Mail } from "../src/svg"
import { Phone } from "../src/svg/Phone"


export const Contact = () => {
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
                <div className="contact__button"><a href="#">Book Now</a></div>
              </div>
            </div>
          </div>

         </div>
      </div>
  )
}
