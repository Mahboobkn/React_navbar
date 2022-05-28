import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:name" element={<User />} />
            <Route path="/*" element={<Page404 />} />
            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
