import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home'
import Menubar from './components/Menubar/Menubar';
import Reviews from './components/Reviews/Reviews'

function App() {
  return (
    <div className="App">

      <Menubar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashBoard" element={<DashBoard />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
