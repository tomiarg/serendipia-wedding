
import { LazyLoadImage } from 'react-lazy-load-image-component'

import estrellas from "../src/assets/img/sofia&nose/serendipia-41.webp"
import gemelosAnillo from "../src/assets/img/sofia&nose/serendipia-17.webp"
import miradaCerca from "../src/assets/img/sofia&nose/serendipia-18.webp"
import noviaEspalda from "../src/assets/img/sofia&nose/serendipia-73.webp"
import padreHija from "../src/assets/img/sofia&nose/serendipia-35.webp"
import paisajeHotel from "../src/assets/img/sofia&nose/serendipia-5.webp"
import paraguas from "../src/assets/img/sofia&nose/serendipia-42.webp"
import abajo from "../src/assets/img/sofia&nose/serendipia-43.webp"

export const PothoWeddin = () => {
  return (
    <>
                 <div className="photos__grid--photo">
                    <LazyLoadImage src={estrellas} alt=""
                    effect="opacity"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }} />
                  </div>
                  <div className="photos__grid--photo">
                    <LazyLoadImage
                    src={gemelosAnillo} 
                    alt="" 
                    effect="opacity"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}
                    
                    />
                  </div>
                  <div className="photos__grid--photo">
                    <LazyLoadImage src={noviaEspalda} alt=""
                    effect="opacity"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }} />
                  </div>
                  <div className="photos__grid--photo">
                     <LazyLoadImage src={miradaCerca} alt="" 
                     effect="opacity"
                     wrapperProps={{
                         style: {transitionDelay: "1s"},
                     }}/>
                  </div>
                  <div className="photos__grid--photo">
                    <LazyLoadImage src={paisajeHotel} alt="" 
                    effect="opacity"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}/>
                  </div>
                  <div className="photos__grid--photo">
                  <LazyLoadImage src={paraguas} alt="" 
                  effect="opacity"
                  wrapperProps={{
                      style: {transitionDelay: "1s"},
                  }}/>
                  </div>
                  <div className="photos__grid--photo">
                    <LazyLoadImage src={padreHija} alt=""
                    effect="opacity"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }} />
                  </div>
                  <div className="photos__grid--photo">
                    <LazyLoadImage src={abajo} alt="" 
                    effect="opacity"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}/>
                  </div>
                     
    </>
  )
}
