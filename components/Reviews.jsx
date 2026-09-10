import cupido from "../src/assets/img/Cupido.png"
import puedes from "../src/assets/img/lidya&Joseph/serendipia-23.webp"
import flor from "../src/assets/img/florYsantiago.webp"
import pilar from "../src/assets/img/pilarYfernando.jpeg"



export const Reviews = ({clientsReviews,reviews}) => {
    const {Lydia, Florencia, Pilar} = reviews
  return (
    <div className="reviews">
        <div className="reviews__heading">
            <h3>{clientsReviews}</h3> 
            <img src={cupido} alt="cupido"  className="reviews__draw"/>
        </div>
        <div className="reviews__texts">
            <div className="reviews__text">
                <img src={puedes} alt="" className="reviews__text--img"/>
                <div className="reviews__text--quote">
                    <blockquote>«{Lydia}»</blockquote>
                    <p reviews__text--author> Lydia & Joseph</p>
                </div>    
            </div>
            <div className="reviews__text">
                <img src={flor} alt="" className="reviews__text--img"/>
                <div className="reviews__text--quote">
                    <blockquote>«{Florencia}»</blockquote>
                    <p reviews__text--author> Florencia & Santiago</p>
                </div>                
            </div>
            <div className="reviews__text">
                <img src={pilar} alt="" className="reviews__text--img"/>
                <div className="reviews__text--quote">
                    <blockquote>«{Pilar}»</blockquote>
                    <p reviews__text--author> Pilar & Fernando</p>
                </div>    
            </div>
        </div>
    </div>
  )
}
