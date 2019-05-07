/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Heading, Text, Box, Image, Link } from 'rebass';
import marksy from 'marksy';
import SyntaxHighlight from './SyntaxHighlight';

/*

If you want your React Components be in the markdown. marksy/jsx is awesome for that!

However it will make the client-side JS become larger and slower.

*/

const compile = marksy({
  createElement: React.createElement,
  elements: {
    h1({ id, children }) {
      return <Heading as="h1">{children}</Heading>;
    },
    h2({ id, children }) {
      return <Heading as="h2">{children}</Heading>;
    },
    h3({ id, children }) {
      return <Heading as="h3">{children}</Heading>;
    },
    h4({ id, children }) {
      return <Heading as="h4">{children}</Heading>;
    },
    h5({ id, children }) {
      return <Heading as="h5">{children}</Heading>;
    },
    blockquote({ children }) {
      return <Box as="blockquote">{children}</Box>;
    },
    hr() {
      return <Box as="hr" css="border: none; border-bottom: 1px solid #CCC;" />;
    },
    ol({ children }) {
      return <Text as="ol">{children}</Text>;
    },
    ul({ children }) {
      return <Text as="ul">{children}</Text>;
    },
    p({ children }) {
      return <Text as="p">{children}</Text>;
    },
    a({ children, href, title, target }) {
      /*
      TODO: Setup External link detection here
       */
      return (
        <Link as="a" href={href} title={title} target={target}>
          {children}
        </Link>
      );
    },
    strong({ children }) {
      return <Text as="strong">{children}</Text>;
    },
    em({ children }) {
      return <Text as="em">{children}</Text>;
    },
    img({ src, alt }) {
      return <Image src={src} alt={alt} />;
    },
    code({ language, code }) {
      const dangerousHTML = SyntaxHighlight.getLanguage(language) ? SyntaxHighlight.highlight(language, code).value : code;
      return (
        <Box as="pre">
          <Text
            as="code"
            fontFamily="mono"
            fontSize={-1}
            className={`hljs ${language}`}
            dangerouslySetInnerHTML={{ __html: dangerousHTML }}
          />
        </Box>
      );
    },
  },
});

const Markdown = props => {
  const compiled = compile(props.markdown);
  return compiled.tree;
};

export default Markdown;

export const Example = props => {
  const compiled = compile(`An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

---

\`\`\`javascript
const TYPESCALE_BASELINE = 16
const TYPESCALE_SCALE = 1.26

const LINEHEIGHT_HEADLINES = 1.325
const LINEHEIGHT_COPY = 1.45

module.exports = {
  breakpoints: ['600px', '900px', '1200px', '1800px'],
  fonts: {},
  space: {
    'page-px': '5%',
    ...new Array(20)
      .fill(0)
      .map((v, index) => index)
      .reduce((acc, value) => {
        const key = value + '/20'
        acc[key] = ((100 * value) / 20).toFixed(0) + '%'
        return acc
      }, {}),
    // prettier-ignore
    ...[0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
      .reduce((acc,value)=>{
        acc[value] = value * 8
        return acc
      },{})
  },
  fontSizes:
    // prettier-ignore
    [-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7]
      .reduce((acc,value)=>{
        acc[value] = Math.round( TYPESCALE_BASELINE * Math.pow( TYPESCALE_SCALE, value) )
        return acc
      },{}),
  lineHeights: {
    headlines: LINEHEIGHT_HEADLINES,
    copy: LINEHEIGHT_COPY,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    /* Design */
    /* Required: For PWA/Offline Settings */
    backgroundColor: '#FFFFFF',
    themeColor: '#0000FF',
  },
  radii: [0, 2, 4],
  /*
    Style Rebass Components Here
  */
  Heading: {
    lineHeight: LINEHEIGHT_HEADLINES,
  },
  Text: {
    lineHeight: LINEHEIGHT_COPY,
  },
  Button: {
    fontWeight: 400,
  },
  /*
    Export Constants too
  */
  constants: {
    TYPESCALE_BASELINE,
    TYPESCALE_SCALE,
    LINEHEIGHT_HEADLINES,
    LINEHEIGHT_COPY,
  },
}


\`\`\`

`);
  return compiled.tree;
};
