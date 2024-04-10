import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Postcards from './components/Postcards';

function App() {
  return (
    <div className="App">
     <Navbar />
     <div>
      <Sidebar />
     </div>
     <div>
       <Postcards />
     </div>
    </div>
  );
}

export default App;
