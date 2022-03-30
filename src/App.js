import './App.css';
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home/Home';
function App() {
  return (
    <div className="App">
     <Navbar isSearchBar={false} />
     <Home />
    </div>
  );
}

export default App;
