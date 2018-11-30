import React, { Component } from 'react'


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
        return (
            <div>
                {
                    gameBoard.map(row => (
                        <div>
                            {
                                row.map(cell => (
                                    <div>
                                        {cell}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        )
    }
}

Snake.defaultProps = {
    // @ToDo it should be checked if bigger than eg. 5
    boardDimension: 10
}

export default Snake
