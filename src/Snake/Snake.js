import React from 'react'
import GameBoard from './GameBoard'

class Snake extends React.Component {
    constructor(props) {
        super()

        const halfBoardDimension = Math.ceil(props.boardDimension / 2) - 1

        this.state = {
            gameBoard: (
              Array(props.boardDimension)
                .fill(
                  Array(props.boardDimension)
                    .fill(1)
                    )
            ),
            snakes: [
                [
                    { x: halfBoardDimension + 2, y: halfBoardDimension },
                    { x: halfBoardDimension + 1, y: halfBoardDimension }
                ],
                [
                    { x: halfBoardDimension - 2, y: halfBoardDimension },
                    { x: halfBoardDimension - 1, y: halfBoardDimension }
                ],
            ],
            meals: []
        }
    }

    composeGameBoard = () => {
        const gameBoardCopy = JSON.parse(JSON.stringify(this.state.gameBoard))

        this.state.snakes
            .forEach(snake => (
                snake.forEach(bodyCellPosition => (
                    gameBoardCopy[bodyCellPosition.y][bodyCellPosition.x] = 0
                ))
            ))

        this.state.meals.forEach(mealPosition => (
            gameBoardCopy[mealPosition.y][mealPosition.x] = 'F'
        ))

        return gameBoardCopy
    }

    render() {
        const gameBoard = this.composeGameBoard()

        return (
            <div>
                <GameBoard
                    gameBoard={gameBoard}
                />
            </div>
        )
    }
}

Snake.defaultProps = {
    // @ToDo it should be checked if bigger than eg. 5
    boardDimension: 11
}

export default Snake
