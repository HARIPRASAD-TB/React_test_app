import Style from './styles/global.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header /> 
      <h1 className={Style.base}>hello</h1>
      <Footer />
    </>
  );
}

export default App;
