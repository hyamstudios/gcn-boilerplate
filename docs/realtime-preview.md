# Realtime Preview

This is a work-in-progress topic.

## Problems to solve

-   [] New routes that does not exists in the previous pre-build version will return 404. Even with webhook set to trigger on create, it will take around 2 minutes to work.
-   [] helper for images
-   [] usage with StaticQuery (HybridQuery?)
-   [] allow developers to write a totally different template for preview. (`pages/preview.page.js` or `pages/preview.contact.js`)

## Previewable

### Example

wrap it around your template with query like this:

```js
export default Previewable(YourTemplate, async ({ client, props, helpers }) => {
    const entry = await client.getEntry(`CONTENTFUL_ID`)
    // create a copy of the original data
    const data = { ...props.data }
    // modify the data with the newly fetched data
    // the structure of the data should be the same as the original data.
    data.someText = entry.fields.someText
    data.someBody = {
        // helpers have some helpful transform functions that replicates the features (such as AST & Excerpt) in the Gatsby plugins we are using.
        markdown: helpers.remark(entry.fields.someMarkdownField),
    }
    // return the data
    return data
})
```
