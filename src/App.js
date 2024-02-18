import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
