import React, { useState } from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
      onSubmit={() => {
        setFormSubmitted(true);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string()
          .email()
          .required('Please enter your email'),
        message: Yup.string().required('Please leave us a message'),
      })}
    >
      {({ isValid, isSubmitting }) => (
        <Form data-netlify>
          <fieldset>
            <legend>contact detail</legend>
            <label htmlFor="name">
              Name
              <Field required type="text" name="name" />
            </label>
            <ErrorMessage name="name" />
            <label htmlFor="email">
              Email
              <Field required type="email" name="email" />
            </label>
            <ErrorMessage name="email" />
            <label htmlFor="message">
              Message
              <Field required component="textarea" name="message" />
            </label>
            <ErrorMessage name="message" />
            <button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
