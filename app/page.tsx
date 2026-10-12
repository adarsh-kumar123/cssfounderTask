import About from "./components/About";
import Hero from "./components/Hero";
import Blogs from "./sections/Blogs";
import Impact from "./sections/Impact";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Impact />
      <Services />
      <Team />
      <Testimonials/>
      <Blogs/>

    </>
  );
}