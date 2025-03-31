import logo from "../src/assets/img/LogoSerendipiaWeddings.png"
import {Instagram, TikTok, Whatsapp} from "../src/svg"

export const Heading = ({headingButton}) => {
  return (
    <header>
     
        <div className="header">
          <div className="overlay">
            <nav className="nav">
                <a href="#"><Instagram/></a>
                <a href="#"><TikTok/></a>
                <a href="#"><Whatsapp/></a>
              </nav>
             <img className="header__img" src={logo}  alt="Serendipia Logo" />
            <p className="header__texto">Film & Photo</p>
          
            <div className="header__button">
              <a href="#">{headingButton}</a> 
            </div>
          </div>
        </div>
    </header>
  )
}
