import React from 'react'


class Menu extends React.Component {
    render () {
        return (
            <ul>
                <MenuItem text='home' url="/" />
                <MenuItem text='kontakt' url="/contact" />

            </ul>
        )
    }
}

export default Menu
