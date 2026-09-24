import "./InstructorSection.css";

const instructorFeatures = [
  "Step-by-step practical lessons",
  "Beginner-friendly explanations",
  "Telugu and English support",
];

function CheckIcon() {
  return (
    <svg
      className="instructor-check-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function InstructorSection() {
  return (
    <section
      className="instructor-section"
      id="instructor"
      aria-labelledby="instructor-heading"
    >
      <div className="instructor-container">
        <div className="instructor-visual">
          <div className="instructor-visual-background" />

          <div className="instructor-profile-card">
            <div className="instructor-avatar" aria-hidden="true">
              PR
            </div>

            <div>
              <p className="instructor-card-label">YOUR INSTRUCTOR</p>
              <h3>PR Learning Lab Trainer</h3>
              <p>Practical skills educator</p>
            </div>
          </div>

          <div className="instructor-subject-card">
            <span className="subject-card-icon" aria-hidden="true">
              ✦
            </span>

            <div>
              <strong>Multiple skill areas</strong>
              <span>Computer, design, video and digital skills</span>
            </div>
          </div>

          <div className="instructor-decoration instructor-decoration-one" />
          <div className="instructor-decoration instructor-decoration-two" />
        </div>

        <div className="instructor-content">
          <p className="instructor-label">MEET YOUR INSTRUCTOR</p>

          <h2 id="instructor-heading">
            Learn from practical teaching experience
          </h2>

          <p className="instructor-description">
            PR Learning Lab courses are designed by a trainer who focuses on
            helping students understand useful computer, design, video and
            digital skills through clear demonstrations.
          </p>

          <p className="instructor-description">
            Every course follows a structured learning path so beginners can
            understand each concept, practise it and confidently apply it in
            real work.
          </p>

          <ul className="instructor-features">
            {instructorFeatures.map((feature) => (
              <li key={feature}>
                <span className="instructor-check">
                  <CheckIcon />
                </span>

                {feature}
              </li>
            ))}
          </ul>

          <a className="instructor-button" href="#courses">
            Explore instructor courses
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default InstructorSection;