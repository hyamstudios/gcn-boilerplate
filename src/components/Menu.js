import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Fixed, Box, NavLink } from 'rebass'

const Menu = () => {
	return (
		<>
			<Fixed top={0} left={0} right={0}>
				<Box px={[1, 2]} py={2} bg="black" color="white">
					<NavLink is={GatsbyLink} to="/">
						Home
					</NavLink>
				</Box>
			</Fixed>
		</>
	)
}

Menu.Pad = () => (
	<Box py={2}>
		<NavLink>&nbsp;</NavLink>
	</Box>
)

export default Menu
