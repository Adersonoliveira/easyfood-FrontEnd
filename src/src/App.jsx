import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Global from "./style/Global";
import Footer from "./componentes/Footer";
import Cadastro from "./componentes/Pages/Cadastro";

function App() {
  return (
    <div className="App">
    <h1>
      <Header/>
      <Banner/>
      <Footer/>
      <Global/>
    </h1>
    </div>
  );
}

export default App;
