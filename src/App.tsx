import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { LegalNotice } from './pages/LegalNotice'
import { Privacy } from './pages/Privacy'
import { Guides } from './pages/Guides'
import { Guide } from './pages/Guide'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:category/:slug" element={<Guide />} />
        <Route path="/legal" element={<LegalNotice />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  )
}

export default App
