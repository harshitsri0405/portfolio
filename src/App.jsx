import { useEffect } from 'react'
import { useRoute } from './router.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Achievements from './components/Achievements.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import NotFound from './pages/NotFound.jsx'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
    </>
  )
}

function Page({ path }) {
  if (path === '/') return <Home />
  const match = path.match(/^\/projects\/([^/]+)\/?$/)
  if (match) return <ProjectDetail slug={match[1]} />
  return <NotFound />
}

export default function App() {
  const route = useRoute()

  // After a page change: open pages at the top, or scroll to the requested home section.
  useEffect(() => {
    if (route.path === '/' && route.anchor) {
      document.getElementById(route.anchor)?.scrollIntoView({ block: 'start' })
    } else if (route.path !== '/' || !route.anchor) {
      window.scrollTo(0, 0)
    }
  }, [route])

  return (
    <>
      <Navbar />
      <main>
        <Page path={route.path} />
      </main>
      <Footer />
    </>
  )
}