import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path=":userId" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
