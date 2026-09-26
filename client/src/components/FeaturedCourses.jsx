import CourseCard from "./CourseCard";
import courses from "../data/courses";
import "./FeaturedCourses.css";

function FeaturedCourses() {
  const featuredCourses = courses.slice(0, 3);

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
            href="/courses"
          >
            View all courses
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="featured-courses__grid">
          {featuredCourses.map((course, index) => (
            <div
              className="featured-courses__card"
              key={course.id}
              style={{
                "--card-delay": `${180 + index * 140}ms`,
              }}
            >
              <CourseCard
                title={course.title}
                category={course.category}
                description={course.description}
                level={course.level}
                duration={course.duration}
                price={course.price}
                shortName={course.shortName}
                theme={course.theme}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;