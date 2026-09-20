import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedCourses />
      </main>
    </>
  );
}

export default App;