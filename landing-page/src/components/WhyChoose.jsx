import "../styles/why-choose.css"
import img from "../assets/images/why-choose/why-choose-girl.png"

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-text">
        <h2>New Approach To Fun</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <ul>
          <li>Best Teaching</li>
          <li>Expert Tutor</li>
          <li>Quality Educators</li>
          <li>Affordable</li>
        </ul>
        <button className="primary-btn">Find Events</button>
      </div>

      <img src={img} className="why-image" />
    </section>
  )
}

export default WhyChoose
