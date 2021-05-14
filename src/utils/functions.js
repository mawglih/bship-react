const width = 10;
export const shipArray = [
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
export const generate = (grid, ship) => {
    let randomDirection = Math.floor(Math.random() * ship.directions.length);
    let direction;
    let current = ship.directions[randomDirection];
    if (randomDirection === 0) direction = 1;
    if (randomDirection === 1) direction = 10;
    let randomStart = Math.abs(Math.floor(Math.random() * grid.length - ship.directions[0].length * direction));
    const isTaken = current.some(index => grid[randomStart + index].classList.contains('taken'));
    const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1);
    const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0);
    if(!isTaken && !isAtLeftEdge && !isAtRightEdge) current.forEach(index => grid[randomStart +  index]).classList.add('taken', ship.name);
    else generate(ship);
}

export default {};