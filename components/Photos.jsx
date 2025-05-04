import { useState } from "react"
import { PothoWeddin } from "./PothoWeddin"
import { baseImg } from "../src/dataBase/baseImg"
import { LazyLoadImage } from "react-lazy-load-image-component"

export const Photos = () => {
  const [galery, setGalery] = useState("")
  const [loading, setLoading] = useState(false);
  


  const onLydiaClick =(e, name)=>{
    e.preventDefault();
    setLoading(true)
    setGalery(name.toLowerCase())
  }



    const selectedWedding = baseImg.find(
      (item) => item.wedding.toLowerCase() === galery
    );
 

  return (
    <section className="photos">
        <div className="photos__heading">
            <h1>Photos</h1>
            <div className="photos__heading-grid">
              <div className="photo__button"><button onClick={(e) => onLydiaClick(e, "lidya")}>Lydia & Joseph</button></div>
               <div className="photo__button"><button onClick={(e) => onLydiaClick(e, "sofia")}>Sofia & David</button></div>
               <div className="photo__button"><button onClick={(e) => onLydiaClick(e, "gail")}>Gail & Justin</button></div>
               <div className="photo__button"><button onClick={(e) => onLydiaClick(e, "mistin")}>Misti & Orin</button></div>
            </div>
            
        </div>
       
        <div className="photos__grid" >
        {selectedWedding ? (
          Object.values(selectedWedding.photos).map((photoUrl, index) => (
            <div className="photos__grid--photo">
                <LazyLoadImage
                 key={index}
                 src={photoUrl}
                 alt={`Wedding photo ${index + 1}`}  effect="opacity"
                 wrapperProps={{
                  style: {transitionDelay: "1s"},
                }}
                
                />
            </div>
            
          ))
        ) : (
        
          <PothoWeddin/>
         
        )}
      </div>
          
         
        

    </section>
  )
}
