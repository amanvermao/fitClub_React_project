import './App.css';
import Hero from './comonents/Hero/Hero.jsx'
import Programes from './components/Programes';
import Reasons from './components/Reaasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Header from './comonents/Hero/Header/Header';






function App() {
  return (
  
   <div className="App">
     
<Hero/>
      <Programes/> 
       <Reasons/>
      <Plans/>
      <Testimonials/>
     
<Join/>
      <Footer />
      
    
      </div>
     
    
    

  );
}

export default App;
