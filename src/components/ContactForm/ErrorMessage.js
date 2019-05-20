import React from 'react';
import { ErrorMessage } from 'formik';

const Container = props => <div className="contactForm-error-message" {...props} />;
export default props => <ErrorMessage component={Container} {...props} />;
