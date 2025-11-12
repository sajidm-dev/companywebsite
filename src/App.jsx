import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import { supabase } from './supabase/supabase'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [data , setData] = useState(null)
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const {data, error } = await supabase.from('team').select('*')
    if (error) {
      console.error('Error fetching data:', error)
    } else {
      setData(data)
      console.log('Data fetched successfully:', data)
    }}

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} data={data}/>
      case 'products':
        return <Products />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
