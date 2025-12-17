import "../styles/teachers.css"
import t1 from "../assets/images/teachers/teacher-1.png"
import t2 from "../assets/images/teachers/teacher-2.png"
import t3 from "../assets/images/teachers/teacher-3.png"
import t4 from "../assets/images/teachers/teacher-4.png"

function Teachers() {
  return (
    <section className="teachers">
      <h2>Expert Teachers</h2>
      <div className="teacher-grid">
        <img src={t1} />
        <img src={t2} />
        <img src={t3} />
        <img src={t4} />
      </div>
    </section>
  )
}

export default Teachers
