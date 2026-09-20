import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <section className="page-introduction">
          <div className="container">
            <h1>PR Learning Platform</h1>
            <p>Learn new skills from anywhere.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;