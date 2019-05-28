# Component: ContactForm

This component demostrates how you can construct a contact form with Formik and uses Netlify Forms as backend.

## Caveats

Since we are using Gatsby plugin `gatsby-plugin-offline`, we will have to add `?no-cache=1` into our form action or requests in order to bypass service worker and let Netlify pick up the form request.
