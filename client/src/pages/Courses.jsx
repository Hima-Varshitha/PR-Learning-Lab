import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Courses.css";

function Courses() {
  return (
    <>
      <Navbar />

      <main className="courses-page">
        <section className="courses-page-header">
          <p className="courses-page-label">EXPLORE COURSES</p>

          <h1>Build practical skills for your next opportunity.</h1>

          <p>
            Browse structured courses created to help you learn useful
            computer, design, video and digital skills.
          </p>
        </section>

        <section className="courses-page-empty">
          <h2>Course listing is coming next</h2>

          <p>
            We will connect our reusable course cards and add search and
            filtering in the next step.
          </p>

          <a href="/">Back to Home</a>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Courses;