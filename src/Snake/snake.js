import React, { Component } from 'react'


class Snake extends React.Component {
    state = {
        gameBoard: (
            Array(this.boardDimension)
                .fill(
                    Array(this.boardDimension)
                        .fill(1)
                )
        )
    }

    render() {
        return (
            <div>
                Snake
            </div>
        )
    }
}

Snake.defaultProps = {
    boardDimension: 10
}




export default Snake
