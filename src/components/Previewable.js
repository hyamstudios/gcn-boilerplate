let Previewable = null

if (process.env.GATSBY_PREVIEW === 'true') {
	const React = require('react')
	const createClient = require('contentful').createClient
	const client = createClient({
		space: process.env.SPACE_ID,
		accessToken: process.env.ACCESS_TOKEN,
		host: 'preview.contentful.com',
	})
	Previewable = function(Component, query) {
		return class _Previewable extends React.Component {
			static displayName = `Previewable(${Component.name ||
				Component.displayName})`
			state = {
				isQueryDone: false,
				queryData: null,
			}
			componentDidMount() {
				if (query) {
					query(client, this.props).then(queryData => {
						this.setState({
							isQueryDone: !!queryData,
							queryData,
						})
					})
				}
			}
			render() {
				return (
					<Component
						{...this.props}
						data={
							this.state.isQueryDone
								? this.state.queryData
								: this.props.data
						}
					/>
				)
			}
		}
	}
} else {
	// No-op
	Previewable = function(component) {
		return component
	}
}

export default Previewable
