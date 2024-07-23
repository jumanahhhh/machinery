import './App.css';
import Cards from './components/cards/Cards';
import Choosee from './components/choose/Choosee';
import FixedBackgroundSection from './components/FixedBg/FixedBackgroundSection';
import Footer from './components/footer/Footer';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Rent from './components/rent/Rent';
function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Choosee/>
    {/* <Cards/> */}
    <Rent/>
    <FixedBackgroundSection/>
    <Footer/>
    </>
  );
}

export default App;
