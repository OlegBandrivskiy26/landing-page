import Content from "./components/Content";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <Header/>
        <Content/>
        <Form/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
