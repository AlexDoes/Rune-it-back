import MainPage from './components/main/main_page';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
var link = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician'
function App() {
    return (
      <MainPage/>
    )
}

export default App;
