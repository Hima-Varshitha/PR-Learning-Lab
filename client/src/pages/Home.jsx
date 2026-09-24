import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import CourseCategories from "../components/CourseCategories";
import InstructorSection from "../components/InstructorSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function Home() {
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

      <Footer />
    </>
  );
}

export default Home;