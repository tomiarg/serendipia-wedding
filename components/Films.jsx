

import { LazyLoadComponent } from "react-lazy-load-image-component"
import boda from "../src/assets/video/serendipiaweb.mp4"
export const Films = () => {
  
  



  return (
    <section className="films">  
     
        <div className="overlay">
       
          <div className="films__links">
          <h2>Films</h2> 
          <div className="video__button"><a href="https://www.youtube.com/watch?v=LwFgJvU96G8" target="_blank">Sofia & David</a></div>
          <div className="video__button"><a href="https://www.youtube.com/watch?v=TxYMcS3tnOE" target="_blank">Madeleine & Antonio</a></div>
          <div className="video__button"><a href="https://www.youtube.com/watch?v=eE0-AIM83qI" target="_blank">Gail & Justin</a></div>
          </div>
          
        </div>
         <video autoPlay loop muted playsInline>
              <source src={boda} type="video/mp4"/>

         </video>
    </section>
  )
}
