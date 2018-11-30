import React from 'react'
import GameCell from './GameCell'

const GameRow = (props) => (
    <div>
    {
        props.row.map(cell => (
            <GameCell 
            cell = {cell}
            />
        ))
    }
</div>
)

export default GameRow