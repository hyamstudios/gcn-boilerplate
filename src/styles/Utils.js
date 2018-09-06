import sys from 'system-components'
import { mixed } from 'styled-system'

export const WithPseudoStyle = (component, selector, subset) =>
	sys({ is: component }, props => ({
		[selector]: mixed(props[subset]),
	}))

export const WithHover = component =>
	WithPseudoStyle(component, '&:hover', 'hover')

export const WithFocus = component =>
	WithPseudoStyle(component, '&:focus', 'focus')

export const WithDisabled = component =>
	WithPseudoStyle(component, '&:disabled', 'disabled')
