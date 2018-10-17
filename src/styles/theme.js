const TYPESCALE_BASELINE = 16
const TYPESCALE_SCALE = 1.26

const LINEHEIGHT_HEADLINES = 1.325
const LINEHEIGHT_COPY = 1.45

module.exports = {
  breakpoints: ['600px', '900px', '1200px', '1800px'],
  fonts: {
    mono: '"Fira Code", monospace',
  },
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
