// import Style from './styles/global.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TestAppHome from './components/TestAppHome/TestAppHome';
import Palindrome from './components/Palindrome/Palindrome';
import RemoveDuplicates from './components/RemoveDuplicates/RemoveDuplicates';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={TestAppHome} />
          <Route path='/palindrome' Component={Palindrome} />
          <Route path='/removeDuplicates' Component={RemoveDuplicates} />
        </Routes>  
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
