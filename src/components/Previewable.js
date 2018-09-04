let Previewable = null
if (__PREVIEW__ENABLED__) {
	const React = require('react')
	const createClient = require('contentful').createClient
	const client = createClient({
		space: __PREVIEW__SPACE_ID__,
		accessToken: __PREVIEW__ACCESS_TOKEN__,
		host: 'preview.contentful.com',
	})
	const _ = require('lodash')
	const Remark = require('remark')
	const select = require(`unist-util-select`)
	const toHAST = require(`mdast-util-to-hast`)
	const hastToHTML = require(`hast-util-to-html`)
	const sanitizeHTML = require(`sanitize-html`)
	const remark = new Remark()
	const helpers = {
		/***
			remark() - replicates the fields from gatsby-transformer-remark
		****/
		remark: (input, { fields, excerptLength = 140 }) => {
			const need = v => fields.indexOf(v) > -1
			const htmlAst = toHAST(remark.parse(input))
			const html = hastToHTML(htmlAst)
			const headings = select(htmlAst, `heading`).map(heading => {
				return {
					value: _.first(
						select(heading, `text`).map(text => text.value)
					),
					depth: heading.depth,
				}
			})
			const pureText = sanitizeHTML(html, {
				allowedTags: [],
			})
			const wordCount = _.words(pureText).length
			const timeToRead = wordCount / 265
			const excerpt = _.truncate(pureText, {
				length: excerptLength,
				omission: `…`,
			}).replace('\n', ' ')
			const obj = {}
			need('html') && (obj['html'] = html)
			need('htmlAst') && (obj['htmlAst'] = htmlAst)
			need('headings') && (obj['headings'] = headings)
			need('excerpt') && (obj['excerpt'] = excerpt)
			need('timeToRead') && (obj['timeToRead'] = timeToRead)
			need('wordCount') && (obj['wordCount'] = wordCount)
			need('tableOfContents') &&
				console.warn(
					'tableOfContents field is not supported in preview'
				)
			need('tableOfContents') && (obj['tableOfContents'] = null)
			return obj
		},
	}
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
						helpers,
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
