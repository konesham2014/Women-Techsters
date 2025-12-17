import "../styles/teachers.css";

function Teachers() {
  return (
    <section className="teachers">
      <h2>Meet Our Instructor</h2>

      <div className="teacher-grid">
        <div className="teacher-card">
          <img src="/assets/images/teachers/teacher1.png" />
          <h4>Cheryl Curry</h4>
          <span>Teacher</span>
        </div>

        <div className="teacher-card">
          <img src="/assets/images/teachers/teacher2.png" />
          <h4>Willie Diaz</h4>
          <span>Teacher</span>
        </div>

        <div className="teacher-card">
          <img src="/assets/images/teachers/teacher3.png" />
          <h4>Jimmy Sifuentes</h4>
          <span>Teacher</span>
        </div>

        <div className="teacher-card">
          <img src="/assets/images/teachers/teacher4.png" />
          <h4>Michael Hammond</h4>
          <span>Teacher</span>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
