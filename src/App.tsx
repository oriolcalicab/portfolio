import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Contact from './pages/Contact/Contact'
import Cv from './pages/Cv/Cv'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="cv" element={<Cv />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
