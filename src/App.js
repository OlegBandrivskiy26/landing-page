import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
