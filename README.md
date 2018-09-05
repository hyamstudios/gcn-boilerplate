# HYAM-GCN-STARTER

Originated from <https://github.com/ryanwiemer/gatsby-starter-gcn>.

## Prerequisites

-   Prepare Contentful delivery/preview and management API for your project.
-   Setup the Git Repo with 3 branches `master` `stage` `develop`
    -   master: production branch, live site. It is a good idea to protect it from being accidentally pushed.
    -   stage: where clients will preview their content.
    -   develop: internal review

If the git setup does not work for you. You can change `netlify.toml` according to your need.

## Use the boilerplate

### Option 1. Using SAO (Recommended)

With SAO, we are able to add in more automation in the scaffolding process.

1. `yarn global add sao`
2. `sao hyamstudios/gcn-boilerplate --clone`

### Option 2. Manually

Download the repo and place it into the desetination.

## Setup the project

1. run `yarn` to install packages
2. run `yarn setup` and fill in your Contentful Space ID & API keys. `.env` and `.contentful.json` will be generated. They contain credentials and please avoid committing them into your git repo (they are gitignored by default).
3. if you have a different git setup, please review `netlify.toml`. ([netlify.toml file reference](https://www.netlify.com/docs/netlify-toml-reference/))
4. you can now setup a site in Netlify, link it to the git repo.
5. Set the following Build Environment Variables:
    - ACCESS_TOKEN -- Contentful Delivery API key
    - PREVIEW_TOKEN -- Contentful Preview API key
    - SPACE_ID -- Contentful Space ID
6. Create 2 Build Hooks, one for `master` (production rebuild), and one for `stage` (preview rebuild). Optionally you can create one for develop.
7. Add the webhooks into your Contentful project. `TODO: Hook Trigger Settings`

## Deployment

You can enable Continuous Deployment in Netlify for all branches.

In this boilerplate, branch `develop` and `stage` have semi real-time preview set to true (enabled).

### (Semi) Realtime Preview

Gatsby is a static website generator, it has to rebuild the whole website when there are updates from Contentful (via webhook) or from your git repo (via Netlify). Sometimes the rebuild process can take more than 2 minutes.

To let the clients preview their changes almost instantly in our website, we have to write our own solution. (At least before Gatsby Preview is out. )

Our current solution is the `Previewable` component. There are a few downsides with this:

1. We cannot reuse our graphql query, and we have to write the query again in REST API for preview.

2. You'll need to output the exact same structure with the API call. Sometimes it can be quite challenging or impossible (e.g. you won't be able to do image transform on the fly with the Previewable component), when you are using some special features that is only there because of some awesome Gatsby plugins.

3. Preview API key and Space id will be exposed in the generated javascript files. Please do not enable Realtime Preview on `master` (production) branch avoid publishing the version with Realtime Preview.

For the detailed usage, check the detailed documentation here: [docs/realtime-preview.md](docs/realtime-preview.md)

## Customization

### Website Data

Edit `/src/utils/siteConfig.js`

### Theme

Edit `/src/styles/theme.js`

### Using Gatsby Standard

1.  Quickly check your code for errors with the `npm test` script
2.  You can view the [Gatsby Standard README](https://github.com/brandonkal/eslint-config-gatsby-standard) for details on how to integrate this project's included Gatsby Standard, Stylelint, and Prettier modules into your text editor

### Content and SEO

This is a work-in-progress.

-   You can replace the `share.jpg` and `logo-512` files in the `static/logos` directory. After replacing these files ensure that you edit the image size dimensions specified in `/src/utils/siteConfig.js`

On the `SEO` component: [docs/seo.md](docs/seo.md)
