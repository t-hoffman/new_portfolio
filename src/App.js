import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from 'Layout/Layout'
import Home from 'Pages/Home'
import Projects from 'Pages/Projects'
import About from 'Pages/About'
import Skills from 'Pages/Skills'
import Contact from 'Pages/Contact'
import './css/index.css'

export default function App() {
  const location = window.location
  const needsRedirect = location.hostname !== 'thoffman.me' && location.hostname !== 'localhost'

  if (needsRedirect) location.href = 'https://thoffman.me'

  return (
   <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contactme" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
   </Layout> 
  )
}
