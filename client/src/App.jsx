import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import CourseCategories from "./components/CourseCategories";
import InstructorSection from "./components/InstructorSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedCourses />
        <WhyChooseUs />
        <CourseCategories />
        <InstructorSection />
      </main>
    </>
  );
}

export default App;