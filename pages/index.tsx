import type { NextPage } from 'next'
import Footer from '../components/commons/Footer'
import Navbar from '../components/commons/Navbar'
import About from '../components/Home/About'
import Experience from '../components/Home/Experience'
import Hero from '../components/Home/Hero'
import Projects from '../components/Home/Projects'
import Skills from '../components/Home/Skills'
import Testimonials from '../components/Home/Testimonials'

const Home: NextPage = () => {
  return (
    <div className='homeContainer'>
      <Navbar fullPageScroll={true} />
      <Hero />
      <About />
      <Testimonials />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
