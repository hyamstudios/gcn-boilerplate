import React from 'react'
import PropTypes from 'prop-types'
import 'whatwg-fetch' // Fetch Polyfill
import { Text, Button, Box } from 'rebass'

const Message = props => (
  <Text as="textarea" {...props}>
    {props.children}
  </Text>
)
const Email = props => (
  <Text as="input" {...props}>
    {props.children}
  </Text>
)
const Name = props => (
  <Text as="input" {...props}>
    {props.children}
  </Text>
)
const Submit = props => <Button {...props}>{props.children}</Button>

const Form = p => <form {...p}>{p.children}</form>

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)  }=${  encodeURIComponent(data[key])}`)
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <Email
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <Message
          name="message"
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />
        <Submit name="submit" type="submit">
          Send
        </Submit>

        {this.state.showModal && (
          <Box>
            <p>
              Thank you for reaching out. I will get back to you as soon as
              possible.
            </p>
            <Button onClick={this.closeModal}>Okay</Button>
          </Box>
        )}
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
