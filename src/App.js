import './App.scss';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ContactPage from './components/ContactPage/ContactPage'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
