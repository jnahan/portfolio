import Navbar from "./Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from "./Footer"
import { Route, Routes, NavLink } from "react-router-dom"
import Microsoft from "./pages/CaseStudies/Microsoft"
import Bondit from "./pages/CaseStudies/Bondit"
import Checkmate from "./pages/CaseStudies/Checkmate"
import DailyUi from "./pages/CaseStudies/DailyUi"
import DrawTogether from "./pages/CaseStudies/DrawTogether"
import EquitableSyllabusProject from "./pages/CaseStudies/EquitableSyllabusProject"
import AnimatedCursor from "react-animated-cursor"
import ReactGA from "react-ga4"

ReactGA.initialize("G-PHX4QMCHRS");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route 
          path="/" element={<Home/>}
        />
        <Route 
          path="/about" element={<About/>}
        />
        <Route path="/microsoft" element={<Microsoft/>}/>
        <Route path="/bondit" element={<Bondit/>}/>
        <Route path="/equitable-syllabus-project" element={<EquitableSyllabusProject/>}/>
        <Route path="/draw-together" element={<DrawTogether/>}/>
        <Route path="/daily-ui" element={<DailyUi/>}/>
      </Routes>
      <Footer/>
      <AnimatedCursor 
        color='249, 56, 137'
      />
    </div>
  )
}

export default App
