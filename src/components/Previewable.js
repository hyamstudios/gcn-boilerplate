let Previewable = null
if (__PREVIEW__ENABLED__) {
	const React = require('react')
	const createClient = require('contentful').createClient
	const client = createClient({
		space: __PREVIEW__SPACE_ID__,
		accessToken: __PREVIEW__ACCESS_TOKEN__,
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

			async fetch() {
				this.setState({
					isQueryDone: false,
					queryData: null,
				})
				if (query) {
					const queryData = await query({
						client,
						props: this.props,
					})
					this.setState({
						isQueryDone: !!queryData,
						queryData,
					})
				}
			}

			componentDidUpdate(prevProps, prevState) {
				if (prevProps.data !== this.props.data) {
					this.fetch()
				}
			}

			componentDidMount() {
				this.fetch()
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
