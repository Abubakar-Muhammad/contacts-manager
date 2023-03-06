import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import NewContact from './pages/NewContact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactProvider from './context/ContactProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewContact />} />
          <Route path='/:id/update' element={<NewContact />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </ContactProvider>
  </React.StrictMode>
)
