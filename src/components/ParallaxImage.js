// @flow
import * as React from 'react'
import { Box, Image } from 'rebass'

type Layer = {
  image: {
    src?: string,
    srcSet?: string,
    sizes?: string,
  },
}

type Props = {
  layers: Array<Layer>,
  y0: number,
  yd: number,
  perspectiveScale: number,
  transition: string,
}

type States = {
  isVisible: boolean,
  progress: number,
}

export default class ParallaxImage extends React.Component<Props, States> {
  static defaultProps = {
    y0: 50,
    yd: -100,
    transition: 'transform 0.1s ease-out',
    perspectiveScale: 0.75,
  }
  $el: { current: null | HTMLElement } = React.createRef()
  state = {
    isVisible: false,
    progress: 0,
  }
  update = (evt: ?Event) => {
    if (this.$el.current != null) {
      const r = this.$el.current.getBoundingClientRect()
      const isVisible = r.top <= window.innerHeight && r.bottom >= 0
      const progress = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight - r.top) / (window.innerHeight + r.height)
        )
      )
      this.setState({
        isVisible,
        progress,
      })
    }
  }
  getTransform(index: number) {
    const factor = Math.pow(this.props.perspectiveScale, index)
    const { progress } = this.state
    const y0 = this.props.y0 * factor
    const yd = this.props.yd * factor
    return `translateY(${y0 + progress * yd}px)`
  }
  componentDidMount() {
    window.addEventListener('scroll', this.update, { passive: true })
    this.update()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.update)
  }
  render() {
    const { layers, transition } = this.props
    const images = layers.map((l, index, arr) => (
      <Image
        key={index}
        style={{
          position: arr.length - 1 === index ? 'static' : 'absolute',
          zIndex: 1 + arr.length - index,
          transform: this.getTransform(index),
          transition,
        }}
        src={l.image.src}
        srcSet={l.image.srcSet}
        sizes={l.image.sizes}
      />
    ))
    return (
      <Box css="position: relative" ref={this.$el}>
        {images}
      </Box>
    )
  }
}
