import "../styles/testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Parents Say</h2>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testimonial-user">Kathy Sullivan</div>
        </div>

        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testimonial-user">Elise Stroud</div>
        </div>

        <div className="testimonial-card">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="testimonial-user">Kathy Sullivan</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
