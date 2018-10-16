import React from 'react'
import { Spring, Trail } from 'react-spring'
import { Button, Flex, Box, Text, Heading } from 'rebass'
import Layout from 'components/Layout'

class MotionExample extends React.Component {
  state = {
    position: {
      x: 0,
      y: 0,
    },
    config: {
      tension: 230,
      friction: 26,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
    },
    items: new Array(10).fill(0).map((_, i) => i),
    mouse: { x: 0, y: 0 },
  }
  $mousePool = React.createRef()
  updateMouse = e => {
    this.setState({
      mouse: {
        x: Math.min(
          this.$mousePool.current.offsetWidth - 50,
          e.pageX - this.$mousePool.current.offsetLeft - 25
        ),
        y: Math.min(550, e.pageY - this.$mousePool.current.offsetTop - 25),
      },
    })
  }
  render() {
    return (
      <Layout>
        <Box mx="page-px" my={8}>
          <Flex>
            <Box width={1 / 3}>
              <Button
                mr={0.5}
                onClick={() => {
                  this.setState({
                    position: {
                      x: Math.random() * 600,
                      y: Math.random() * 300,
                    },
                  })
                }}
              >
                Random Value
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    position: {
                      x: this.state.position.x === 0 ? 500 : 0,
                      y: 0,
                    },
                  })
                }}
              >
                {this.state.position.x === 0 ? 'x500y0' : 'x0y0'}
              </Button>
            </Box>
            <Box width={1 / 3}>
              <Heading fontSize={0}>tension</Heading>
              <Text>{this.state.config.tension}</Text>
              <Box
                width={0.8}
                as="input"
                type="range"
                min="1"
                max="500"
                value={this.state.config.tension}
                onChange={e => {
                  this.setState({
                    config: {
                      ...this.state.config,
                      tension: parseFloat(e.target.value),
                    },
                  })
                }}
              />
            </Box>
            <Box width={1 / 3}>
              <Heading fontSize={0}>friction</Heading>
              <Text>{this.state.config.friction}</Text>
              <Box
                width={0.8}
                as="input"
                type="range"
                min="1"
                max="500"
                value={this.state.config.friction}
                onChange={e => {
                  this.setState({
                    config: {
                      ...this.state.config,
                      friction: parseFloat(e.target.value),
                    },
                  })
                }}
              />
            </Box>
          </Flex>
          <Box bg="#333333" style={{ height: 300 }} mb={10}>
            <Spring
              config={this.state.config}
              from={{ x: 500, y: 0 }}
              to={this.state.position}
            >
              {value => (
                <Box
                  css="width:90px;height:90px;"
                  my={3}
                  p={1}
                  bg="red"
                  color="white"
                  style={{
                    transform: `translate(${value.x}px,${value.y}px)`,
                  }}
                />
              )}
            </Spring>
          </Box>
          <Box
            ref={this.$mousePool}
            my={10}
            bg={'#66E'}
            css="border-radius:25px"
            style={{ height: 600 }}
            onMouseMove={e => {
              this.setState({
                mouse: {
                  x: Math.min(
                    this.$mousePool.current.offsetWidth - 50,
                    e.pageX - this.$mousePool.current.offsetLeft - 25
                  ),
                  y: Math.min(
                    550,
                    e.pageY - this.$mousePool.current.offsetTop - 25
                  ),
                },
              })
            }}
          >
            <Trail
              config={this.state.config}
              from={{ x: 500, y: 0 }}
              to={this.state.mouse}
              keys={this.state.items.map((_, i) => i)}
            >
              {this.state.items.map((_, i) => data => (
                <Box
                  css="position:absolute;width:50px;height:50px;border-radius:50%"
                  key={i}
                  style={{
                    background: `hsla(0,0%,${((1 + i) / 5) * 100}%,1)`,
                    transform: `translate(${Math.max(
                      0,
                      Math.min(
                        this.$mousePool.current
                          ? this.$mousePool.current.offsetWidth - 50
                          : 0,
                        data.x + i * 50
                      )
                    )}px,${Math.max(
                      0,
                      Math.min(
                        this.$mousePool.current
                          ? this.$mousePool.current.offsetHeight - 50
                          : 0,
                        data.y
                      )
                    )}px)`,
                  }}
                />
              ))}
            </Trail>
          </Box>
        </Box>
      </Layout>
    )
  }
}

export default MotionExample
