import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import HeaderBottom from './components/headerBottom/HeaderBottom';
import SignUp from './components/signup/SignUp';
import { Overlay } from './utils';
import Routes from "./routes"
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';

function App() {
  const [isSignUpActive, setIsSignUpActive] = useState(false)
  const [isSignUpEnter, setIsSignUpEnter] = useState(false)
  const [isCatalogActive, setIsCatalogActive] = useState(false)
  const [isCatalogEnter, setIsCatalogEnter] = useState(false)
  return (
    <div className='container'>
        <Header />
        <HeaderBottom setIsSignUpActive={setIsSignUpActive} setIsSignUpEnter={setIsSignUpEnter} setIsCatalogActive={setIsCatalogActive} setIsCatalogEnter={setIsCatalogEnter}/>
        <SignUp isSignUpActive={isSignUpActive} setIsSignUpActive={setIsSignUpActive} isSignUpEnter={isSignUpEnter} setIsSignUpEnter={setIsSignUpEnter}/>
        <Catalog isCatalogActive={isCatalogActive} setIsCatalogActive={setIsCatalogActive} isCatalogEnter={isCatalogEnter} setIsCatalogEnter={setIsCatalogEnter}/>
        <Routes />
        <Footer />
        {
            isSignUpActive && <Overlay type="signup" state={isSignUpActive} callback={setIsSignUpActive}/> 
        }
        {
          isCatalogActive && <Overlay type="catalog" state={isCatalogActive} callback={setIsCatalogActive}/>
        }
    </div>
  );
}

export default App;
