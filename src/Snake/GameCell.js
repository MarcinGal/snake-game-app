import React from 'react'

const GameCell = (props) => (
    <div>
        {
            GameCell.map(cell => (
                <div>
                    {
                    props.row.map(cell => (
                    <GameCell 
                    cell={cell}
                    />
                    ))
                    }
                </div>
            ))
        }
    </div>
)

export default GameCell