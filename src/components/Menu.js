import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Toolbar, NavLink } from 'rebass'

const Menu = () => {
	return (
		<Toolbar>
			<NavLink is={GatsbyLink} to="/">
				Home
			</NavLink>
		</Toolbar>
	)
}

export default Menu
