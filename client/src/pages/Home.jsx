import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "../components/WhyChooseUs";
import CourseCategories from "../components/CourseCategories";
import InstructorSection from "../components/InstructorSection";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <ScrollReveal>
          <FeaturedCourses />
        </ScrollReveal>

        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal>
          <CourseCategories />
        </ScrollReveal>

        <ScrollReveal>
          <InstructorSection />
        </ScrollReveal>

        <ScrollReveal>
          <CallToAction />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}

export default Home;