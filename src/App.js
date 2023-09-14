import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import { Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import AuthState from './context/authentication/AuthState';
import AlertState from './context/alert/AlertState';
import Navbar from './components/Navbar';

function App() {
  return (
    <NoteState>
      <header>
        <Navbar />
      </header>
      <AuthState>
        <AlertState>
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </div>
        </AlertState>
      </AuthState>
    </NoteState>
  );
}

export default App;
