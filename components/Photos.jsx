import { useState } from "react"
import { PothoWeddin } from "./PothoWeddin"

export const Photos = () => {
  const [galery, setGalery] = useState("")
  
  return (
    <section className="photos">
        <div className="photos__heading">
            <h1>Photos</h1>
            <div className="photos__heading-grid">
              <div className="photo__button"><a href="https://www.youtube.com/watch?v=LwFgJvU96G8" target="_blank">Lydia & Joseph</a></div>
               <div className="photo__button"><a href="https://www.youtube.com/watch?v=LwFgJvU96G8" target="_blank">Sofia & David</a></div>
               <div className="photo__button"><a href="https://www.youtube.com/watch?v=LwFgJvU96G8" target="_blank">Gail & Justin</a></div>
               <div className="photo__button"><a href="https://www.youtube.com/watch?v=LwFgJvU96G8" target="_blank">Misti & Orin</a></div>
            </div>
            
        </div>
        <div className="photos__grid">
          <PothoWeddin/>
        </div>     

    </section>
  )
}
