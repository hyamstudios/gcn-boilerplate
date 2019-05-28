# Component: PageFooter

this is just an demonstration on how you can organise a component.

You can create a PageFooterContainer component inside this folder, and use it to connect to data sources. Then, export it as default in `index.js` file. So the logic around this component is fully contained. And the usage will be:

```
import PageFooterContainer from 'components/PageFooter'
```

## Diagram

```
PageFooter
  index.js ------------------ where webpack will look at first when you import the folder
  PageFooter.js ------------- presentational component that only cares about rendering
  FooterLink.js ------------- a sub component that you use inside the component
  (PageFooterContainer.js) -- optional container component that feed data and extra logic into the presentational component
  readme.md ----------------- documentation about the component
```
