import { BrowserRouter as Route, Navigate, Outlet}
    from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar>
      <Route exact path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/resume' element={<Resume/>} />
        <Navigate to='/' element={<Home/>}/>
    </Navbar>
    <Header></Header>
    <Outlet />
    <Footer></Footer>
    </div>
  );
}

export default App;
