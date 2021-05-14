import Game from './components/Game';
import Title from './components/Title';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title
        title="Battleship game"
        subtitle="Play against computer"
      />
      <Game/>
    </div>
  );
}

export default App;
