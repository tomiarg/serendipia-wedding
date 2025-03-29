import anillos from "../src/assets/img/Anillos.png"

export const SectionBelive = () => {
  return (
    <>
    <div className="sectionBelive">
        <div className='sectionBelive__image'>
            <img src={anillos} alt="" />
        </div>
        <div className="sectionBelive__texts">
            <h3 className="sectionBelive__heading">WE BELIEVE IN THE MAGIC OF THE SPONTANEOUS </h3>
            <div className="sectionBelive__text"><p>Wedding Film</p></div>
            <div className="sectionBelive__text"><p>Videos Highlights</p></div>
            <div className="sectionBelive__text"><p>Social Media Shorts</p></div> 
            <div className="sectionBelive__text"><p>Photographs</p></div>
            <div className="sectionBelive__text"><p>High-resolution deliveries  </p></div>
        </div>
    </div>
    </>
  )
}
