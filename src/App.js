import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from "./component/About";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
   
   <Navbar title="Textutils" about="AboutMe"/> 
    {/* <Navbar/>  */}
    <Routes>

    <Route exact path="/" element={<TextForm title="Enter the text to analyze"/>}></Route>
    <Route exact path='/about' element={ <About/>}></Route>
  
    </Routes>
    </Router>
   </>
   );
}


export default App;
