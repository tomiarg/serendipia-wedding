import cupido from "../src/assets/img/Cupido.png"
import puedes from "../src/assets/img/Puedebesar.jpeg"

export const Reviews = () => {
  return (
    <div className="reviews">
        <div className="reviews__heading">
            <h3>Our Clients reviews</h3> 
            <img src={cupido} alt="cupido"  className="reviews__draw"/>
        </div>
        <div className="reviews__texts">
            <div className="reviews__text">
                <img src={puedes} alt="" className="reviews__text--img"/>
                <div className="reviews__text--quote">
                    <blockquote>«Martin has impressed us in many ways. We have loved working with him!!»</blockquote>
                    <p reviews__text--author> Lara y Daniel</p>
                </div>    
            </div>
            <div className="reviews__text">
                <img src={puedes} alt="" className="reviews__text--img"/>
                <div className="reviews__text--quote">
                    <blockquote>«Martin has impressed us in many ways. We have loved working with him!!»</blockquote>
                    <p reviews__text--author> Lara y Daniel</p>
                </div>                
            </div>
            <div className="reviews__text">
                <img src={puedes} alt="" className="reviews__text--img"/>
                <div className="reviews__text--quote">
                    <blockquote>«Martin has impressed us in many ways. We have loved working with him!»</blockquote>
                    <p reviews__text--author> Lara y Daniel</p>
                </div>    
            </div>
        </div>
    </div>
  )
}
