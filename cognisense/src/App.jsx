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
        <div className="intro">
        <p className="intro-paragraph">Cognisense is an AI powered law platform that specializes in quick, efficient, and accurate completion
          of simple divorces. We will guide through each step of the way, so you don't have to feel overwhelmed the 
          paperwork. Utilizing AI, you will feel your questions and concerns will be heard and answered. Plus,
          you will not have to pay exuberant fees to complete your simple divorce.
        </p>
         {/* btn */}
         <div className="btn-1">
        <a href="#">Find out more</a>
      </div>
      </div>
       
      </div>
     
      <Footer />
    </>
  )
}

export default App
