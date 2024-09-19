import Style from './styles/global.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header /> 
        <h1 className={Style.base}>Hello</h1>
      <Footer />
    </>
  );
}

export default App;
