import logo from './logo.svg';
import './App.css';
import Read from './component/Read';
import Header from './component/Header';
import Footer from './component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Add from './component/Add';


function App() {
 
  
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path = "/" Component= {Read}></Route>
      <Route path = "/add-student" Component= {Add}></Route>
      <Route path = "/edit-student/:id" Component= {Add}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
