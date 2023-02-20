import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './aboutskill';
import { Form } from './form';
import { Footer } from './footer';
import Vision from './vision';
import Profile from './profilepage';
import User from './user';
import Feature from './features';
import Nav from './navbar';
import Home from './home';
import Category from './catageries';

function App(){
  return(
      <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={[<Nav/>,<Home/>,<Category/>,<About/>,<Vision/>,<Feature/>, <Form/>,<Footer/>]}/>
        <Route path='/catageries' element={[<Nav/>,<Category/>]}/>
        <Route path='/about' element={[<Nav/>,<About/>]}/>
        <Route path='/vision' element={[<Nav/>,<Vision/>]}/>
        <Route path='/features' element={[<Nav/>,<Feature/>]}/>
        <Route path='/form' element={[<Nav/>,<Form/>]}/>
        <Route path='/footer' element={[<Nav/>,<Footer/>]}/>
        <Route path='/profile/:id' element={[<Nav/>,<Profile/>]}/>
        <Route path='/user' element={[<Nav/>,<User/>]}/>
        
       


        </Routes>
      
      
      </BrowserRouter>
     
      
      
      
     
     
      

      </>
  );
}

export default App;
