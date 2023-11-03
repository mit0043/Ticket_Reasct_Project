import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Ticket/Header';
import Home from './Ticket/Home';
import Department from './Ticket/Department';
import User from './Ticket/User';
import Ticket from './Ticket/Ticket';
import Ticket_Book from './Ticket/Ticket_Book';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='home' element={<Home/>}/>
            <Route path='department' element={<Department/>}/>
            <Route path='user' element={<User/>}/>
            <Route path='ticket' element={<Ticket/>}/>
            <Route path='ticket_book' element={<Ticket_Book />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
