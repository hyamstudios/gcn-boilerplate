import React, { Fragment } from 'react'
import { StaggeredMotion, Motion, spring } from 'react-motion'

import { Button, Flex, Box, Text, Heading } from 'rebass'

import Layout from 'components/Layout'

class MotionExample extends React.Component {
  state = {
    x: 0,
    y: 0,
    config: {
      stiffness: 230,
      damping: 26,
    },
    mouse: { x: 0, y: 0 },
  }

  $mousePool = React.createRef()

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
                    x: Math.random() * 600,
                    y: Math.random() * 300,
                  })
                }}
              >
                Random Value
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    x: this.state.x === 0 ? 500 : 0,
                    y: 0,
                  })
                }}
              >
                {this.state.x === 0 ? 'x500y0' : 'x0y0'}
              </Button>
            </Box>
            <Box width={1 / 3}>
              <Heading fontSize={0}>stiffness</Heading>
              <Text>{this.state.config.stiffness}</Text>
              <Box
                width={0.8}
                as="input"
                type="range"
                min="1"
                max="500"
                value={this.state.config.stiffness}
                onChange={e => {
                  this.setState({
                    config: {
                      ...this.state.config,
                      stiffness: parseFloat(e.target.value),
                    },
                  })
                }}
              />
            </Box>
            <Box width={1 / 3}>
              <Heading fontSize={0}>damping</Heading>
              <Text>{this.state.config.damping}</Text>
              <Box
                width={0.8}
                as="input"
                type="range"
                min="1"
                max="500"
                value={this.state.config.damping}
                onChange={e => {
                  this.setState({
                    config: {
                      ...this.state.config,
                      damping: parseFloat(e.target.value),
                    },
                  })
                }}
              />
            </Box>
          </Flex>
          <Box bg="#333333" style={{ height: 300 }} mb={10}>
            <Motion
              defaultStyle={{ x: 200, y: 200 }}
              style={{
                x: spring(this.state.x, this.state.config),
                y: spring(this.state.y, this.state.config),
              }}
            >
              {value => {
                return (
                  <Box
                    css="width:90px;height:90px;"
                    my={3}
                    p={1}
                    bg="red"
                    color="white"
                    style={{
                      transform: `translate(${value.x}px,${value.y}px)`,
                    }}
                  >
                    {/* <Text>{value.x.toFixed(1)}</Text>
                    <Text>{'  |  '}</Text>
                    <Text>{value.y.toFixed(1)}</Text> */}
                  </Box>
                )
              }}
            </Motion>
          </Box>
          <Box
            ref={this.$mousePool}
            my={10}
            bg="#66E"
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
            <StaggeredMotion
              defaultStyles={new Array(10).fill(0).map(() => ({ x: 0, y: 0 }))}
              styles={prevStyles =>
                prevStyles.map((_, i) => {
                  const config = this.state.config
                  return i === 0
                    ? {
                        x: spring(this.state.mouse.x, config),
                        y: spring(this.state.mouse.y, config),
                      }
                    : {
                        x: spring(
                          Math.max(
                            0,
                            Math.min(
                              this.$mousePool.current.offsetWidth - 50,
                              prevStyles[i - 1].x + 50
                            )
                          ),
                          config
                        ),
                        y: spring(
                          Math.max(
                            0,
                            Math.min(
                              this.$mousePool.current.offsetHeight - 50,
                              prevStyles[i - 1].y
                            )
                          ),
                          config
                        ),
                      }
                })
              }
            >
              {interpolations => (
                <Fragment>
                  {interpolations.map((data, i) => (
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
                            data.x
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
                </Fragment>
              )}
            </StaggeredMotion>
          </Box>
        </Box>
      </Layout>
    )
  }
}

export default MotionExample
