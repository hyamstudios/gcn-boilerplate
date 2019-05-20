import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import qs from 'qs';
import Button from 'components/Button';

import './ContactForm.css';
import ErrorMessage from './ErrorMessage';

export default () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  if (formSubmitted) {
    return (
      <section>
        <h2>Form submitted</h2>
      </section>
    );
  }
  return (
    <Formik
      initialValues={{
        'form-name': 'contact',
        name: '',
        email: '',
        message: '',
        bot: '',
      }}
      onSubmit={async (values, actions) => {
        actions.setStatus({ submitError: null });
        try {
          await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(values),
            url: '/?no-cache=1',
          });
          setFormSubmitted(true);
        } catch (error) {
          actions.setStatus({ submitError: error.message });
          actions.setSubmitting(false);
        }
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string()
          .email()
          .required('Please enter your email'),
        message: Yup.string().required('Please leave us a message'),
      })}
    >
      {({ isValid, isSubmitting, status }) => (
        <Form className="contactForm" name="contact" data-netlify data-netlify-honeypot="bot">
          <Field type="hidden" name="form-name" />
          <p hidden>
            <label htmlFor="bot">
              Do not fill this out
              <Field type="text" name="bot" />
            </label>
          </p>
          <fieldset>
            <legend className="text-xl">contact detail</legend>
            <div className="contactForm-group">
              <label className="contactForm-label" htmlFor="name">
                Name
              </label>
              <Field className="contactForm-field" required type="text" name="name" />
            </div>
            <ErrorMessage name="name" />
            <div className="contactForm-group">
              <label className="contactForm-label" htmlFor="email">
                Email
              </label>
              <Field className="contactForm-field" required type="email" name="email" />
            </div>
            <ErrorMessage name="email" />
            <div className="contactForm-group">
              <label className="contactForm-label" htmlFor="message">
                Message
              </label>
              <Field className="contactForm-field" required component="textarea" name="message" />
            </div>
            <ErrorMessage name="message" />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>{' '}
            <Button variant={Button.Variants.Generic} type="reset">
              Reset
            </Button>
            {status && status.submitError && <div>{status.submitError}</div>}
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
