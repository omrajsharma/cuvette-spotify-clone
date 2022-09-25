import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PlayerPlaylist from './components/PlayerPlaylist';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <div className='player-container'>
        <div className='side-bar'>
          <Sidebar/>
        </div>
        <div className='player-playlist'>
          <PlayerPlaylist/>

        </div>
      </div>

      <div className='footer'>
        <Footer/>
      </div>
    </>
  );
}

export default App;
