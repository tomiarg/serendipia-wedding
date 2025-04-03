import anillos from "../src/assets/img/Anillos.png"

export const SectionBelive = ({beliveHead, beliveLi}) => {

  const {wedding, videos, shorts, photos, resolution} = beliveLi

  return (
    <>
    <div className="sectionBelive">
        <div className='sectionBelive__image'>
            <img src={anillos} alt="" />
        </div>
        <div className="sectionBelive__texts">
            <h3 className="sectionBelive__heading">{beliveHead} </h3>
            <div className="sectionBelive__text"><p>{wedding}</p></div>
            <div className="sectionBelive__text"><p>{videos}</p></div>
            <div className="sectionBelive__text"><p>{shorts}</p></div> 
            <div className="sectionBelive__text"><p>{photos}</p></div>
            <div className="sectionBelive__text"><p>{resolution}</p></div>
        </div>
    </div>
    </>
  )
}
