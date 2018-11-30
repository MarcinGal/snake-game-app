import React, { Component } from 'react'
import GameBoard from './GameBoard'

class Snake extends React.Component {
    state = {
        gameBoard: (
            Array(this.props.boardDimension)
                .fill(
                    Array(this.props.boardDimension)
                        .fill(1)
                )
        ),
        snakes: [
            [
                { x: 5, y: 5 }
            ],
            [
                { x: 0, y: 0 }
            ],
        ]
    }

    composeGameBoard = () => {
        const gameBoardCopy = JSON.parse(JSON.stringify(this.state.gameBoard))

        this.state.snakes
        .forEach(snake => (
        snake.forEach(bodyCellPosition => (
            gameBoardCopy[bodyCellPosition.y][bodyCellPosition.x] = 0
        ))
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
    boardDimension: 10
}

export default Snake
