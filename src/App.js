import './App.css';
import Navbar from '../src/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Navbar isSearchBar={false} />
    </div>
  );
}

export default App;
