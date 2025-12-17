import "../styles/video.css"
import video from "../assets/images/video/video-cover.png"

function VideoStats() {
  return (
    <section className="video-section">
      <div className="video-box">
        <img src={video} />
        <div className="play-overlay"></div>
      </div>

      <div className="stats">
        <div>
          <h3>2,500</h3>
          <p>Total Teacher</p>
        </div>
        <div>
          <h3>5,000</h3>
          <p>Total Student</p>
        </div>
        <div>
          <h3>350</h3>
          <p>Total Classroom</p>
        </div>
        <div>
          <h3>1,200</h3>
          <p>Best Awards Won</p>
        </div>
      </div>
    </section>
  )
}

export default VideoStats
