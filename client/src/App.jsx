import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedCourses />
        <WhyChooseUs />
      </main>
    </>
  );
}

export default App;