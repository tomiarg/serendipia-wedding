import estrellas from "../src/assets/img/Estrellitas.jpeg"
import gemelosAnillo from "../src/assets/img/gemelosAnillo.jpg"
import miradaCerca from "../src/assets/img/miradaCerca.jpg"
import noviaEspalda from "../src/assets/img/noviaEspalda.jpg"
import padreHija from "../src/assets/img/Contentos.jpeg"
import paisajeHotel from "../src/assets/img/paisajeHotel.jpg"
import paraguas from "../src/assets/img/paraguas.jpg"
import abajo from "../src/assets/img/abajo.jpg"

export const Photos = () => {
  return (
    <section className="photos">
        <div className="photos__heading">
            <h1>Photos</h1>
            <div className="photos__heading-grid">
              <div className="photos__boda"><h3>Boda 1</h3></div>
              <div className="photos__boda"><h3>Boda 2</h3></div>
              <div className="photos__boda"><h3>Boda 3</h3></div>
              <div className="photos__boda"><h3>Boda 4</h3></div>
            </div>
            
        </div>
        <div className="photos__grid">
          <div className="photos__grid--photo">
            <img src={estrellas} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={gemelosAnillo} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={noviaEspalda} alt="" />
          </div>
          <div className="photos__grid--photo">
             <img src={miradaCerca} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={paisajeHotel} alt="" />
          </div>
          <div className="photos__grid--photo">
          <img src={paraguas} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={padreHija} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={abajo} alt="" />
          </div>
             
        </div>     

    </section>
  )
}
