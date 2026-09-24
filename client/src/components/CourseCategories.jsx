import "./CourseCategories.css";

const categories = [
  {
    id: 1,
    name: "Computer & Office",
    description:
      "Build essential computer skills and learn Microsoft Office applications.",
    icon: "computer",
    courseCount: "4 courses",
  },
  {
    id: 2,
    name: "Graphic Design",
    description:
      "Create professional designs using Photoshop, Illustrator and CorelDRAW.",
    icon: "design",
    courseCount: "5 courses",
  },
  {
    id: 3,
    name: "Video Editing",
    description:
      "Learn video editing with Premiere Pro, Filmora and DaVinci Resolve.",
    icon: "video",
    courseCount: "4 courses",
  },
  {
    id: 4,
    name: "Digital Marketing",
    description:
      "Understand practical online marketing, social media and audience growth.",
    icon: "marketing",
    courseCount: "3 courses",
  },
  {
    id: 5,
    name: "AI Tools",
    description:
      "Use modern AI tools to improve productivity, creativity and daily work.",
    icon: "ai",
    courseCount: "3 courses",
  },
  {
    id: 6,
    name: "Content Creation",
    description:
      "Plan, produce and publish engaging content for YouTube and social media.",
    icon: "content",
    courseCount: "3 courses",
  },
];

function CategoryIcon({ name }) {
  const icons = {
    computer: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),

    design: (
      <>
        <path d="m12 3 7 7-9 9H3v-7l9-9Z" />
        <path d="m14 5 5 5M3 19l5-5" />
      </>
    ),

    video: (
      <>
        <rect x="3" y="5" width="14" height="14" rx="2" />
        <path d="m17 10 4-2v8l-4-2v-4ZM8 9l4 3-4 3V9Z" />
      </>
    ),

    marketing: (
      <>
        <path d="M4 13v-2l12-5v12L4 13Z" />
        <path d="M8 14v5H5v-6M16 10c2 0 4-1 5-3M16 14c2 0 4 1 5 3" />
      </>
    ),

    ai: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        <path d="m9 15 3-6 3 6M10 13h4" />
      </>
    ),

    content: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h5M8 15h3" />
        <path d="m15 14 3 2-3 2v-4Z" />
      </>
    ),
  };

  return (
    <svg
      className="category-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function CourseCategories() {
  return (
    <section
      className="categories-section"
      id="categories"
      aria-labelledby="categories-heading"
    >
      <div className="categories-container">
        <div className="categories-header">
          <div>
            <p className="categories-label">EXPLORE BY CATEGORY</p>

            <h2 id="categories-heading">
              Skills for your next opportunity
            </h2>
          </div>

          <p className="categories-introduction">
            Choose a learning path that matches your interests and develop
            practical skills through structured courses.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <a
              className="category-card"
              href="#courses"
              key={category.id}
              aria-label={`Explore ${category.name} courses`}
            >
              <div className="category-card-top">
                <div className="category-icon-container">
                  <CategoryIcon name={category.icon} />
                </div>

                <span className="category-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <h3>{category.name}</h3>
              <p>{category.description}</p>

              <span className="category-course-count">
                {category.courseCount}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseCategories;