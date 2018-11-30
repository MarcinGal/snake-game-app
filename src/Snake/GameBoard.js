import React from 'react'
import GameRow from './GameRow'

const GameBoard = (props) => (
    <div>
        {
            props.gameBoard.map(row => (
                <GameRow
                    row={row}
                />
            ))
        }
    </div>
)

export default GameBoard