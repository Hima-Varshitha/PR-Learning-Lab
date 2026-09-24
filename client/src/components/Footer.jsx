import "./Footer.css";
import logo from "../assets/PR-learning-lab-logo.jpg";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="footer-logo-link"
              href="#home"
              aria-label="PR Learning Lab home"
            >
              <img
                className="footer-logo"
                src={logo}
                alt="PR Learning Lab logo"
              />

              <span>PR Learning Lab</span>
            </a>

            <p>
              A practical learning platform helping students build useful
              computer, design, video and digital skills.
            </p>

            <div className="footer-language">
              <span aria-hidden="true">✓</span>
              Telugu and English-friendly learning
            </div>
          </div>

          <div className="footer-links-column">
            <h2>Platform</h2>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#courses">Courses</a>
              </li>

              <li>
                <a href="#categories">Categories</a>
              </li>

              <li>
                <a href="#instructor">Instructor</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h2>Popular Skills</h2>

            <ul>
              <li>
                <a href="#courses">Microsoft Office</a>
              </li>

              <li>
                <a href="#courses">Graphic Design</a>
              </li>

              <li>
                <a href="#courses">Video Editing</a>
              </li>

              <li>
                <a href="#courses">Digital Marketing</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h2>Learning</h2>

            <ul>
              <li>
                <a href="#courses">Explore Courses</a>
              </li>

              <li>
                <a href="#instructor">Trainer Guidance</a>
              </li>

              <li>
                <a href="#categories">Learning Paths</a>
              </li>

              <li>
                <a href="#home">Get Started</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} PR Learning Lab. All rights reserved.
          </p>

          <p className="footer-bottom-message">
            Practical Skills. Real Learning.
          </p>

          <a className="footer-back-to-top" href="#home">
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;