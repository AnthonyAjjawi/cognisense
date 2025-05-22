import telephone from './assets/telephone.jpg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="image-container">
        <a href="https://example.com"  target="_blank">
          <img src={telephone} className="logo telephone" alt="Telephone" />
        </a>
      </div>
      <Footer />
    </>
  )
}

export default App
