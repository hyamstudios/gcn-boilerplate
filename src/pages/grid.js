import React from 'react'
import { Provider, Flex, Text, Card } from 'rebass'
import theme from '../styles/theme'
import Grid from '../components/Grid'

export default class Page extends React.Component {
	render() {
		return (
			<Provider theme={theme}>
				<Grid
					m={[1, 2, 3, 3, 3]}
					gap={[1, 2, 3, 3, 3]}
					columns={[
						'100fr',
						'50fr 50fr',
						'33fr 33fr 33fr',
						'25fr 25fr 25fr 25fr',
					]}
					alignItems="center"
				>
					{new Array(100).fill(0).map((v, i) => (
						<Card key={i}>
							<Flex
								alignItems="center"
								justifyContent="center"
								style={{ height: 40 }}
							>
								<Text>
									{Math.floor(i / 13)} - {i % 13}
								</Text>
							</Flex>
						</Card>
					))}
				</Grid>
			</Provider>
		)
	}
}
