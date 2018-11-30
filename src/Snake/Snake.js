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
        )
    }

    render() {
        const gameBoard = JSON.parse(JSON.stringify(this.state.gameBoard))
        gameBoard[0][0] = 0
        gameBoard[2][3] = 'F'

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
