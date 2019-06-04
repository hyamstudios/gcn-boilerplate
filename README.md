# HYAM-GCN-STARTER

## Local Setup

1. create `.env` according to `.env-example`
2. use `yarn`

## Netlify Setup

1. create environment variables in deploy settings according to `.env-example`
2. create `GOOGLE_ANALYTIC` env var if using google analytic

## Frameworks/Libraries used in this project

Gatsby - https://gatsbyjs.org

React - https://reactjs.org

GraphQL - https://graphql.org

Tailwind - https://tailwindcss.com

PostCSS - https://github.com/postcss/postcss

(optional) Styled Component - https://www.styled-components.com

`Gatsby` makes creating performant website easy. Gatsby can handle image optimization for you so you and your designer friends do not have to worry about client's 8000 x 8000 pixels image anymore.

You will use `React` and `GraphQL` with `Gatsby`. For more information check their documentation out!

We use `Tailwind CSS` to make sure we have consistent design applied across the project. For example, you have limited choices on spacing (margin & padding) and font sizes by using `Tailwind`'s classes (e.g. `m-1 m-2 m-3... text-xs text-sm text-md...`). Ideally designers should give you a list of spacing and text sizes to let you configure `Tailwind`.

`Tailwind CSS` is powered by `PostCSS`, feel free to configure it. However, it should be sufficient to use other options, before extending/reconfiguring `PostCSS`. Please continute reading for alternatives.

Importing css files, and `CSS modules` are supported [out of the box thanks to Gatsby](https://www.gatsbyjs.org/docs/css-modules/).

`Styled Components` provides a easy way to write contained CSS, or sometimes it is nice to have your CSS inside your JS code (e.g. complicated visual components. ).

You can also use `Tailwind CSS` directives with `Styled Components`, this is useful when you are referencing spacing and text sizes. It is also a bit more concise comparing to its alternative -- using classNames on the styled component. However, using classNames has the advantage of reducing duplicates of CSS code, or simplify the code which updates the appearance of the component in some cases. If you are unsure what to use, choose the one that makes most sense at the moment, and the one gives you the best developer experience. You can always refactor or optimize the code later.

### Why all these options in writing CSS

In principle, we should focus on the usage of `Tailwind CSS` because of its ability to create a rigid and clean design system.

Therefore I recommend the following usage:

1. Prioritize to use the utility classes from `Tailwind CSS` if possible.
2. Read [Extracting Components](https://tailwindcss.com/docs/extracting-components) section on `Tailwind CSS`, follow the good patterns there.
3. Use CSS Modules when you want to contain component style (i.e. not planning to reuse these classnames outside of the component. )
4. In some cases where you need to build super interactive complicated components, it can be easier to use CSS-in-JS. You can then use `Styled Components` in these places.

By default Styled Components is not used anywhere in the code in this boilerplate. It is a special power for the special time when you are building your special project! Have fun!

## Code formatting

We use eslint and [commitlint](https://github.com/conventional-changelog/commitlint).

## E2E testing

We use Cypress

### Screenshots testing

We use Cypress plugin: [link](https://github.com/palmerhq/cypress-image-snapshot)
