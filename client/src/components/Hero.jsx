import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Practical learning for real-world skills
          </p>

          <h1 className="hero__title">
            Learn practical skills.
            <span> Create with confidence.</span>
          </h1>

          <p className="hero__description">
            Build valuable computer, design, video editing and digital
            skills through structured courses created by an experienced
            trainer.
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href="#courses"
            >
              Explore Courses

              <span aria-hidden="true">→</span>
            </a>

            <a
              className="hero__button hero__button--secondary"
              href="#instructor"
            >
              Meet Your Instructor
            </a>
          </div>

          <ul className="hero__benefits">
            <li>
              <span aria-hidden="true">✓</span>
              Practical lessons
            </li>

            <li>
              <span aria-hidden="true">✓</span>
              Learn at your pace
            </li>

            <li>
              <span aria-hidden="true">✓</span>
              Telugu-friendly support
            </li>
          </ul>
        </div>

        <div
          className="hero__visual"
          aria-label="Example course-learning interface"
        >
          <div className="hero__visual-header">
            <div>
              <p className="hero__visual-label">
                Continue learning
              </p>

              <h2>Video Editing Essentials</h2>
            </div>

            <span className="hero__progress-value">
              68%
            </span>
          </div>

          <div className="hero__progress">
            <div className="hero__progress-bar"></div>
          </div>

          <div className="hero__lesson-list">
            <div className="hero__lesson hero__lesson--complete">
              <span className="hero__lesson-number">✓</span>

              <div>
                <p>Getting started</p>
                <span>Completed</span>
              </div>
            </div>

            <div className="hero__lesson hero__lesson--active">
              <span className="hero__lesson-number">02</span>

              <div>
                <p>Working with the timeline</p>
                <span>12 minutes remaining</span>
              </div>

              <span className="hero__play" aria-hidden="true">
                ▶
              </span>
            </div>

            <div className="hero__lesson">
              <span className="hero__lesson-number">03</span>

              <div>
                <p>Audio and transitions</p>
                <span>18 minutes</span>
              </div>
            </div>
          </div>

          <div className="hero__visual-footer">
            <div className="hero__instructor-avatar">
              PR
            </div>

            <div>
              <span>Your instructor</span>
              <p>Practical guidance at every step</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;