import React, { useState } from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values, actions) => {
        actions.setStatus({ submitError: null });
        try {
          await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(values),
            url: '/',
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
        <Form name="contact" data-netlify="true" noValidate>
          <input type="hidden" name="form-name" value="contact" />
          <fieldset>
            <legend>contact detail</legend>
            <label htmlFor="name">Name</label>
            <Field required type="text" name="name" />
            <ErrorMessage name="name" />
            <label htmlFor="email">Email</label>
            <Field required type="email" name="email" />
            <ErrorMessage name="email" />
            <label htmlFor="message">Message</label>
            <Field required component="textarea" name="message" />
            <ErrorMessage name="message" />
            <button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </button>
            {status && status.submitError && <div>{status.submitError}</div>}
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
