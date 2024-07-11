import React from 'react'
import {createRoot} from 'react-dom/client'
import MenuItem from './MenuItem'

const root = createRoot(document.querySelector('#root'))

const App = () => <div><MenuItem /></div>

root.render(<App />)

