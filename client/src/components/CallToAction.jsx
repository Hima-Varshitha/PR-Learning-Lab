import "./CallToAction.css";

function CallToAction() {
  return (
    <section
      className="cta-section"
      aria-labelledby="cta-heading"
    >
      <div className="cta-container">
        <div className="cta-decoration cta-decoration-one" />
        <div className="cta-decoration cta-decoration-two" />

        <div className="cta-content">
          <p className="cta-label">START YOUR LEARNING JOURNEY</p>

          <h2 id="cta-heading">
            Ready to build skills that matter?
          </h2>

          <p className="cta-description">
            Learn practical computer, design, video and digital skills through
            structured courses created for real-world growth.
          </p>

          <div className="cta-actions">
            <a className="cta-primary-button" href="#courses">
              Explore Courses
              <span aria-hidden="true">→</span>
            </a>

            <a className="cta-secondary-button" href="#instructor">
              Meet Your Instructor
            </a>
          </div>
        </div>

        <div className="cta-summary" aria-label="Learning benefits">
          <div className="cta-summary-item">
            <strong>Practical</strong>
            <span>Skill-based lessons</span>
          </div>

          <div className="cta-summary-divider" />

          <div className="cta-summary-item">
            <strong>Flexible</strong>
            <span>Learn at your pace</span>
          </div>

          <div className="cta-summary-divider" />

          <div className="cta-summary-item">
            <strong>Supportive</strong>
            <span>Clear trainer guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
