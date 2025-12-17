import "../styles/blog.css";

function Blog() {
  return (
    <section className="blog">
      <h2>Most Popular Post</h2>

      <div className="blog-grid">
        <div className="blog-card">
          <img src="/assets/images/blog/blog1.png" />
          <div className="blog-content">
            <h4>Learning is Fun for Kids</h4>
            <button>Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/assets/images/blog/blog2.png" />
          <div className="blog-content">
            <h4>Creative Classrooms</h4>
            <button>Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <img src="/assets/images/blog/blog3.png" />
          <div className="blog-content">
            <h4>Play & Learn</h4>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
