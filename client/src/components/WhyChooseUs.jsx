import "./WhyChooseUs.css";

const learningBenefits = [
  {
    id: 1,
    icon: "practice",
    title: "Practical Learning",
    description:
      "Learn useful skills through clear demonstrations, guided lessons and real-world examples.",
  },
  {
    id: 2,
    icon: "pace",
    title: "Learn at Your Pace",
    description:
      "Watch lessons whenever you want, continue from where you stopped and learn without pressure.",
  },
  {
    id: 3,
    icon: "support",
    title: "Trainer Guidance",
    description:
      "Receive structured guidance from an experienced trainer throughout your learning journey.",
  },
  {
    id: 4,
    icon: "language",
    title: "Telugu-Friendly Support",
    description:
      "Understand technical and creative topics more comfortably with learner-friendly support.",
  },
];

function BenefitIcon({ name }) {
  const icons = {
    practice: (
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
    ),
    pace: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    support: (
      <>
        <path d="M5 11a7 7 0 0 1 14 0v5" />
        <path d="M5 16H3v-4h2M19 12h2v4h-2M19 16c0 2-2 3-5 3" />
      </>
    ),
    language: (
      <>
        <path d="M4 5h10M9 3v2M6 8c1 3 3 5 6 7M12 8c-1 3-3 5-6 7" />
        <path d="m14 20 3-7 3 7M15 18h4" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="benefit-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

function WhyChooseUs() {
  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="why-container">
        <div className="why-introduction">
          <p className="why-label">WHY PR LEARNING LAB?</p>

          <h2 id="why-heading">
            Learning designed for practical growth
          </h2>

          <p className="why-description">
            Build confidence through structured, practical courses created
            for learners who want skills they can use in the real world.
          </p>

          <div className="why-highlight">
            <span className="why-highlight-number">01</span>

            <div>
              <strong>Simple and focused learning</strong>
              <p>
                Clear lessons help you focus on understanding and applying
                each skill without unnecessary complexity.
              </p>
            </div>
          </div>
        </div>

        <div className="benefits-grid">
          {learningBenefits.map((benefit) => (
            <article className="benefit-card" key={benefit.id}>
              <div className="benefit-icon-container">
                <BenefitIcon name={benefit.icon} />
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;