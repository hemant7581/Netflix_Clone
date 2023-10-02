import './App.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './COMPONENTS/Home/Home.jsx';
import Header from './COMPONENTS/Header/Header';

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
