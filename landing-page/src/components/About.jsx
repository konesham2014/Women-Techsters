import "../styles/about.css"
import girl from "../assets/images/about/about-girl-main.png"
import boy from "../assets/images/about/about-boy-small.png"

function About() {
  return (
    <section className="about">
      <div className="about-images">
        <img src={girl} className="about-main" />
        <img src={boy} className="about-small" />
      </div>

      <div className="about-text">
        <h2>It's Our Passion To Work With Children</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>

        <ul>
          <li>Quality Educators</li>
          <li>Play To Learn</li>
          <li>Safety & Security</li>
          <li>Home Like Environment</li>
        </ul>

        <button className="primary-btn">About Us</button>
      </div>
    </section>
  )
}

export default About
