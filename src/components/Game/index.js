import Grid from '../Grid';
import Buttons from '../Buttons'
import Info from '../Info';
import './game.css';

const Game = () => {
    return (
        <div className="container">
            <Grid/>
            <Buttons/>
            <Info/>
        </div>
    )
}
export default Game;