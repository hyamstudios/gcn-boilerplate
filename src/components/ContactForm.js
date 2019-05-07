import React from 'react';
import 'whatwg-fetch'; // Fetch Polyfill
import { Text, Button, Box } from 'rebass';

const Message = props => <Text as="textarea" {...props} />;
const Email = props => <Text as="input" {...props} />;
const Name = props => <Text as="input" {...props} />;
const Submit = props => <Button {...props} />;

const Form = p => <form {...p}>{p.children}</form>;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    };
  }

  handleInputChange = event => {
    const { value, name } = event;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => console.error(error));
    event.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { name, email, message, showModal } = this.state;
    return (
      <Form name="contact" onSubmit={this.handleSubmit} data-netlify="true" data-netlify-honeypot="bot" onClick={this.closeModal}>
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          Don’t fill this out: <input name="bot" onChange={this.handleInputChange} />
        </p>

        <Name name="name" type="text" placeholder="Full Name" value={name} onChange={this.handleInputChange} required />
        <Email name="email" type="email" placeholder="Email" value={email} onChange={this.handleInputChange} required />
        <Message name="message" type="text" placeholder="Message" value={message} onChange={this.handleInputChange} required />
        <Submit name="submit" type="submit">
          Send
        </Submit>

        {showModal && (
          <Box>
            <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
            <Button onClick={this.closeModal}>Okay</Button>
          </Box>
        )}
      </Form>
    );
  }
}

export default ContactForm;
