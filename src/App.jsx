import { Route,Routes,HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const {drawer} = useSelector(state => state.drawer);
  return (
    <div>
      <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      {drawer && <Cart/>}
      <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
