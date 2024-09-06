import Style from './styles/global.module.scss';
import Header from './components/Header/Header';


function App() {
  return (
    <>
      <Header /> 
      <h1 className={Style.base}>hello</h1>
    </>
  );
}

export default App;
