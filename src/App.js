import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import { originals,action } from '../src/URL'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <RowPost url={originals} title='Netfilx Orginals' isLarge/>
      <RowPost url={action} title='Action'/>
    </div>
  );
}

export default App;
