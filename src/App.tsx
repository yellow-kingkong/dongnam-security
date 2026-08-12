import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import SmartPatrol from './components/SmartPatrol'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <SmartPatrol />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  )
}
