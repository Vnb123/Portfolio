import Nav from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
function Home() {
  return (
    <div>
      <div>
        <h1>Vana Bigava</h1>
        <h2>Junior Software Engineer</h2>
      </div>
      <div>
        <Nav />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
export default Home;
