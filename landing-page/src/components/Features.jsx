import "../styles/features.css"
import start from "../assets/images/features/feature-start-course.png"
import teacher from "../assets/images/features/feature-expert-teachers.png"
import location from "../assets/images/features/feature-location.png"

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <img src={start} />
        <h3>Start Course</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>

      <div className="feature-card active">
        <img src={teacher} />
        <h3>Expert Teachers</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>

      <div className="feature-card">
        <img src={location} />
        <h3>Strategic Location</h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </section>
  )
}

export default Features
