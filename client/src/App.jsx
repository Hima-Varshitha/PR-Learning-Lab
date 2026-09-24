import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import CourseCategories from "./components/CourseCategories";
import InstructorSection from "./components/InstructorSection";
import CallToAction from "./components/CallToAction";

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
        <CallToAction />
      </main>
    </>
  );
}

export default App;