import React from 'react'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

const headerStyles = {
    textDecoration: 'underline',
    color: 'red'
}

root.render(
    <header
    style = {headerStyles}
    >Moja pierwsza strona w React</header>
)