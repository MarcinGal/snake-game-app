import React from 'react'
import GameBoard from './GameBoard'

class Snake extends React.Component {
    constructor(props) {
        super()

        const halfBoardDimension = Math.ceil(props.boardDimension / 2) - 1

        this.intervalId = null
        this.currentGameBoard = null
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
                ]
            ],
            directions: [
                'right',
                'left'
            ],
            meals: [],
            currentPlayerIndex: 0,
            gameTickTime: props.startGameTickTime
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(
            this.gameTick,
            this.state.gameTickTime
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    gameTick = () => {
        console.log('tick')
    }

    checkIfMovesAreAvailable = () => {
        this.state.snakes.forEach((snakePositions, snakeIndex) => {
            const snakeHeadPosition = snakePositions[0]
            const direction = this.state.direction[snakeIndex]
            let newSnakeHeadPosition = null

            switch (direction) {
                case 'left':
                    newSnakeHeadPosition = {
                        x: snakeHeadPosition.x - 1,
                        y: snakeHeadPosition.y
                    }
                    break
                case 'right':
                    newSnakeHeadPosition = {
                        x: snakeHeadPosition.x + 1,
                        y: snakeHeadPosition.y
                    }
                    break
                case 'top':
                    newSnakeHeadPosition = {
                        x: snakeHeadPosition.x,
                        y: snakeHeadPosition.y - 1
                    }
                    break
                case 'down':
                    newSnakeHeadPosition = {
                        x: snakeHeadPosition.x,
                        y: snakeHeadPosition.y + 1
                    }
                    break
            }

            if (
                this.currentGameBoard[newSnakeHeadPosition.y] &&
                this.currentGameBoard[newSnakeHeadPosition.y][newSnakeHeadPosition.x]
            ) {
                this.moveSnake(snakeIndex, newSnakeHeadPosition)
            } else {
                this.endGame(snakeIndex)
            }

        })
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
        this.currentGameBoard = this.composeGameBoard()

        return (
            <div>
                <GameBoard
                    gameBoard={this.currentGameBoard}
                />
            </div>
        )
    }
}

Snake.defaultProps = {
    // @ToDo it should be checked if bigger than eg. 5
    boardDimension: 11,
    startGameTickTime: 1000
}

export default Snake
