import Square from "../Square";
import generate from '../../utils/functions';

const Grid = () => {
    const computerSquares = Array.from(100).fill(null);
    const width = 10;
    const shipArray = [
        {
            name: 'destroyer',
            directions: [
                [0, 1],
                [0, width],
            ],
        },
        {
            name: 'submarine',
            directions: [
                [0, 1, 2],
                [0, width, width*2],
            ],
        },
        {
            name: 'cruiser',
            directions: [
                [0, 1, 2],
                [0, width, width*2],
            ],
        },
        {
            name: 'battleship',
            directions: [
                [0, 1, 2, 3],
                [0, width, width*2, width*3],
            ],
        },
        {
            name: 'carrier',
            directions: [
                [0, 1, 2, 3, 4],
                [0, width, width*2, width*3, width*4],
            ],
        },
    ];
  
    const playGame = e => {
        const square = e.target;
        console.log(square.id)
    }
    const renderSquare = i => {
        return (
           <Square 
                onclick={e => playGame(e)}
                value = {computerSquares[i]}
                squareId = {i}
                key = {i}
            />
            )
    }
    const createGrid = () => {
        const arr = Array.from(Array(100).keys());
        return arr.map(el => {
            return renderSquare(el)
        });
    }
    const generateAllShips = () => {
        shipArray.forEach(ship => {
            generate(createGrid, ship);
        })
    }
    return (
        <div className="grid">
            {generateAllShips()}
        </div>
    )
}
export default Grid;