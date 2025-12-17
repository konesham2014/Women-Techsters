import "../styles/hero.css"
import boy from "../assets/images/hero/hero-boy.png"
import girl from "../assets/images/hero/hero-girl.png"
import cloud from "../assets/images/hero/hero-cloud-small.png"
import sun from "../assets/images/hero/hero-sun.png"

function Hero() {
  return (
    <section className="hero">
      <img src={cloud} className="hero-cloud" />
      <img src={sun} className="hero-sun" />

      <div className="hero-inner">
        <div className="hero-text">
          <h1>The Best Place To Learn And Play For Kids</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="hero-actions">
            <button className="primary-btn">Browse Courses</button>
            <button className="play-btn">Watch Now</button>
          </div>
        </div>

        <div className="hero-images">
          <img src={boy} className="hero-boy" />
          <img src={girl} className="hero-girl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
