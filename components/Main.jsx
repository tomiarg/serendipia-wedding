
import corazonNegro from "../src/assets/img/CorazonNegro.png"

export const Main = () => {
  return (
    <main className="main">
     <div className="overlay overlay--main">
      <div className="main__text">
        <h2>Who we are?</h2>
        <p>At Serendipia, we’re all about capturing those once-in-a-lifetime moments that
        define love and the connection between two people. Our team        is made up of
        photographers and filmmakers with years of experience, all         dedicated to creating
        top-notch images and films that truly reflect the beauty and         vibe of each wedding.
        Our mission is simple: to tell your love story through         photography and film, creating
        memories that take you right back to the heart of your         special day, so you can
        relive every feeling like it’s happening all over again.</p>
      </div>
      <img className="main__img" src={corazonNegro} alt="" />
     </div>
    </main>
  )
}
