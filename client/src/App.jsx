import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import CourseCategories from "./components/CourseCategories";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedCourses />
        <WhyChooseUs />
        <CourseCategories />
      </main>
    </>
  );
}

export default App;