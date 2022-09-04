import logo from './logo.svg';
import "./common.css"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/main";
import Footer from "./components/Footer/Footer";
function App() {
  return (
      <div className="App">
          <body>
        <Navbar />
          <Main/>
      <Footer/>
          </body>
      </div>
  );
}
export default App;
