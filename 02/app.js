import React from 'react'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))


const HeaderFn = () => {
    return (
        <header
            style={{
            color: "red",
            textDecoration: "underline"
        }}
        >

            Moja pierwsza strona w React
    </header>    
    )
}

root.render(<HeaderFn />)




