import estrellas from "../src/assets/img/Estrellitas.jpeg"
export const Films = () => {
  return (
    <section className="films">
        <div className="films__heading">
            <h1>Films</h1>
            <img className="films__heading--img" src={estrellas} alt="" />
        </div>
        <div className="films__mixs">
             <img className="films__mixs--img" src={estrellas} alt="" />
        </div>     

    </section>
  )
}
