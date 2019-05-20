import React from 'react';
import { arrayOf, shape, number, string } from 'prop-types';

export default class ParallaxImage extends React.Component {
  static propTypes = {
    layers: arrayOf(
      shape({
        image: shape({
          src: string,
          srcSet: string,
          sizes: string,
        }),
      }),
    ).isRequired,
    y0: number,
    yd: number,
    perspectiveScale: number,
    transition: string,
  };

  static defaultProps = {
    y0: 50,
    yd: -100,
    transition: 'transform 0.1s ease-out',
    perspectiveScale: 0.75,
  };

  $el = React.createRef();

  state = {
    isVisible: false,
    progress: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.update, { passive: true });
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.update);
  }

  getTransform(index) {
    const { perspectiveScale, y0, yd } = this.props;
    const factor = perspectiveScale ** index;
    const { progress } = this.state;
    return `translateY(${(y0 + progress * yd) * factor}px)`;
  }

  update = () => {
    const r = this.$el.current.getBoundingClientRect();
    const isVisible = r.top <= window.innerHeight && r.bottom >= 0;
    const progress = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight + r.height)));
    this.setState({
      isVisible,
      progress,
    });
  };

  render() {
    const { isVisible } = this.state;
    const { layers, transition } = this.props;
    const images = layers.map((l, index, arr) => (
      <img
        // eslint-disable-next-line react/no-array-index-key
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
        alt={l.image.alt}
      />
    ));
    return (
      <div className="relative" ref={this.$el} data-visible={isVisible}>
        {images}
      </div>
    );
  }
}
