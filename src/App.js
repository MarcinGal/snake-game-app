import React from 'react'
import Snake from './Snake'

import { database } from './firebaseConfig'

const App = props => {
   return <div> <Snake
   firebaseDatabase={database}
   /></div>
}

export default App
