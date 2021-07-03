import { BrowserRouter} from "react-router-dom"
import './App.scss';
import Head from "./components/Head/Head";
import Main from "./components/Main/Main";
import Footer from "./components/Footer"
import Nav from "./components/Head/Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head/>
        <Main/>
        <Footer/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
