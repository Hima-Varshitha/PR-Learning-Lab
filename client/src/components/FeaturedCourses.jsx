import CourseCard from "./CourseCard";
import "./FeaturedCourses.css";

function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Microsoft Office Fundamentals",
      category: "Productivity",
      description:
        "Learn Word, Excel and PowerPoint through practical, beginner-friendly lessons.",
      level: "Beginner",
      duration: "8 weeks",
      price: "₹2,499",
      shortName: "MS",
      theme: "office",
    },
    {
      id: 2,
      title: "Adobe Photoshop Essentials",
      category: "Graphic Design",
      description:
        "Build strong photo-editing and design skills using real creative exercises.",
      level: "Beginner",
      duration: "6 weeks",
      price: "₹2,999",
      shortName: "Ps",
      theme: "design",
    },
    {
      id: 3,
      title: "Professional Video Editing",
      category: "Video Editing",
      description:
        "Learn editing, audio, transitions and visual storytelling from the ground up.",
      level: "Beginner",
      duration: "10 weeks",
      price: "₹3,499",
      shortName: "Pr",
      theme: "video",
    },
  ];

  return (
    <section className="featured-courses" id="courses">
      <div className="container">
        <div className="featured-courses__header">
          <div>
            <p className="featured-courses__eyebrow">
              Featured courses
            </p>

            <h2>
              Start building practical skills
            </h2>

            <p className="featured-courses__description">
              Choose a structured course and learn through clear,
              practical lessons designed for beginners.
            </p>
          </div>

          <a
            className="featured-courses__view-all"
            href="#all-courses"
          >
            View all courses
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="featured-courses__grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              description={course.description}
              level={course.level}
              duration={course.duration}
              price={course.price}
              shortName={course.shortName}
              theme={course.theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;