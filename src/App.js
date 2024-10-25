import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Channels from './pages/Channels';
import Own from './pages/Own';
import Groups from './pages/Groups';
import { IoMdMenu } from "react-icons/io";

function App() {
  return (
    <Router>
      <div className="App">

        <header>  <i><IoMdMenu /></i>   <h1>PhantoGram</h1></header>
        <nav>
          <Link to="/"    id='Link' >Chats</Link>
          <Link to="/Groups"  id='Link' >Groups</Link>
          <Link to="/Channels"  id='Link' >Channels</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Own />} />
          <Route path='/Groups' element={<Groups />} />
          <Route path='/Channels' element={<Channels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
