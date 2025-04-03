import estrellas from "../src/assets/img/Estrellitas.jpeg"
export const Photos = () => {
  return (
    <section className="photos">
        <div className="photos__heading">
            <h1>Photos</h1>
        </div>
        <div className="photos__grid">
          <div className="photos__grid--photo">
            <img src={estrellas} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={estrellas} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={estrellas} alt="" />
          </div>
          <div className="photos__grid--photo">
             <img src={estrellas} alt="" />
          </div>
          <div className="photos__grid--photo">
            <img src={estrellas} alt="" />
          </div>
          <div className="photos__grid--photo">
          <img src={estrellas} alt="" />
          </div>
          <div className="photos__grid--photo">
          <img src={estrellas} alt="" />
          </div>
             
        </div>     

    </section>
  )
}
