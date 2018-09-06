import sys from 'system-components'
import { keys, includes } from 'lodash'
import { styles } from 'styled-system'

export const autoUseAllStyles = props => {
	if (!props) {
		return {}
	}
	const propsKeys = keys(props)
	return keys(styles).reduce((a, f) => {
		const includeThisFunction = propsKeys.some(key =>
			includes(keys(styles[f].propTypes), key)
		)
		return includeThisFunction ? { ...a, ...styles[f](props) } : a
	}, {})
}

export const pseudoStyle = (selector, props) => ({
	[selector]: autoUseAllStyles(props),
})

export const WithPseudoStyle = (component, selector, subset) =>
	sys({ is: component }, props => pseudoStyle(selector, props[subset]))

export const WithHover = component =>
	WithPseudoStyle(component, '&:hover', 'hover')

export const WithFocus = component =>
	WithPseudoStyle(component, '&:focus', 'focus')

export const WithDisabled = component =>
	WithPseudoStyle(component, '&:disabled', 'disabled')
