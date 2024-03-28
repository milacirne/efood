import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Japanese from './pages/Japanese'
import Italian from './pages/Italian'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/japanese" element={<Japanese />} />
    <Route path="/italian" element={<Italian />} />
  </Routes>
)

export default AppRoutes
