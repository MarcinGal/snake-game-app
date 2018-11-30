import React from 'react'
import GameRow from './GameRow'

const style = {
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: 'red'
}

const GameBoard = (props) => (
    <div
    style={style}
    >
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