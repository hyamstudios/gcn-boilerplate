import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Text, Flex, Box, NavLink, Badge, Heading } from 'rebass'

export const FooterLink = p => (
	<Box>
		<NavLink is={Link} {...p} pt={0} pl={0} display="block" />
	</Box>
)

export const Footer = props => (
	<Flex
		css={Footer.css}
		px={3}
		py={4}
		flexWrap="wrap"
		bg="black"
		color="white"
	>
		<Box mb={[3, 3, 0]} width={[1, 1, 4 / 10]}>
			<Heading>
				hy.am studios
				<Badge>{process.env.NODE_ENV}</Badge>
				<Badge>{process.env.CONTENTFUL_HOST}</Badge>
			</Heading>
		</Box>
		<Box mb={[4, 4, 0]} width={[1, 2 / 3, 4 / 10]}>
			<Heading pb={4} fontSize={2}>
				Our Mission
			</Heading>
			<Text fontSize={1} lineHeight={1.35} pr={[0, 4, 4]}>
				Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed et
				fermentum sem, quis consectetur libero.{' '}
			</Text>
		</Box>
		<Box mb={[3, 3, 0]} width={[1, 1 / 3, 2 / 10]}>
			<Heading pb={4} fontSize={2}>
				Links
			</Heading>
			<FooterLink to="/">Home</FooterLink>
			{props.links.map(link => (
				<FooterLink key={link.slug} to={link.slug}>
					{link.title}
				</FooterLink>
			))}
		</Box>
	</Flex>
)

Footer.defaultProps = {
	links: [],
}
Footer.css = ``

export const FooterWithQuery = props => (
	<StaticQuery
		query={graphql`
			query {
				pages: allContentfulPage {
					edges {
						node {
							title
							slug
						}
					}
				}
			}
		`}
		render={data => (
			<Footer
				{...props}
				links={data.pages.edges.map(({ node }) => node)}
			/>
		)}
	/>
)

export default FooterWithQuery
