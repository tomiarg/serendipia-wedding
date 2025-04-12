import estrellas from "../src/assets/img/Estrellitas.jpeg"
import boda from "../src/assets/video/boda.mp4"
export const Films = () => {
  return (
    <section className="films">   
        <div class="overlay">
          <div class="films__links">
          <div className="video__button"><a href="#">Madelein & Antonio</a></div>
          <div className="video__button"><a href="#">Anna & Ricardo</a></div>
          <div className="video__button"><a href="#">Gail & Justin</a></div>
          <div className="video__button"><a href="#">Lidia & Joseph</a></div>
          <div className="video__button"><a href="#">Kim & Gaby</a></div>
          </div>
          
        </div>
         <video autoPlay loop muted playsInline>
              <source src={boda} type="video/mp4"/>

         </video>
    </section>
  )
}
