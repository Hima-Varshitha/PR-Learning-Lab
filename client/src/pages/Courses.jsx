import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses";
import "./Courses.css";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <main className="courses-page">
        <section className="courses-page-header">
          <div className="container">
            <p className="courses-page-label">
              EXPLORE COURSES
            </p>

            <h1>
              Build practical skills for your next opportunity.
            </h1>

            <p className="courses-page-description">
              Browse structured courses designed to help you build
              useful computer, design, video, marketing and AI skills.
            </p>
          </div>
        </section>

        <section className="course-discovery">
          <div className="container">
            <div className="course-discovery__toolbar">
              <div className="course-search">
                <span
                  className="course-search__icon"
                  aria-hidden="true"
                >
                  ⌕
                </span>

                <input
                  type="search"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  aria-label="Search courses"
                />
              </div>

              <p className="course-results-count">
                {filteredCourses.length}
                {filteredCourses.length === 1
                  ? " course"
                  : " courses"}
              </p>
            </div>

            <div
              className="course-categories"
              aria-label="Filter courses by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    selectedCategory === category
                      ? "course-category-button course-category-button--active"
                      : "course-category-button"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredCourses.length > 0 ? (
              <div className="courses-grid">
                {filteredCourses.map((course) => (
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
            ) : (
              <div className="courses-empty-state">
                <div
                  className="courses-empty-state__icon"
                  aria-hidden="true"
                >
                  ⌕
                </div>

                <h2>No courses found</h2>

                <p>
                  Try another search term or choose a different
                  category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Courses;