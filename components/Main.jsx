
import corazonNegro from "../src/assets/img/CorazonNegro.png"

export const Main = ({mainHead, mainText}) => {
  return (
    <main className="main">
     <div className="overlay overlay--main">
      <div className="main__text">
        <h2>{mainHead}</h2>
        <p>{mainText}</p>
      </div>
      <img className="main__img" src={corazonNegro} alt="" />
     </div>
    </main>
  )
}
