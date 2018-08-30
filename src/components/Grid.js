import sys from 'system-components'
import { style, util } from 'styled-system'
import { Box } from 'rebass'

/*

TODO: add polyfill

Example:

<Grid
  m={[1, 2, 3, 3, 3]}
  gap={[1, 2, 3, 3, 3]}
  columns={[
    '100fr',
    '50fr 50fr',
    '33fr 33fr 33fr',
    '25fr 25fr 25fr 25fr',
  ]}
  alignItems="center"
>
  {"Your Elements"}
</Grid>

 */

const px = util.px
const num = util.num
export const Grid = sys(
  {
    is: Box,
    display: 'grid',
  },
  style({
    prop: 'columns',
    cssProperty: 'gridTemplateColumns',
    key: 'spaces',
    transformValue: v => (num(v) ? `repeat(auto-fit, minmax(${v}px, 1fr))` : v),
  }),
  style({
    prop: 'rows',
    cssProperty: 'gridTemplateRows',
    key: 'spaces',
    transformValue: v => (num(v) ? `repeat(auto-fit, minmax(${v}px, 1fr))` : v),
  }),
  style({
    prop: 'gap',
    cssProperty: 'gridGap',
    key: 'spaces',
    transformValue: px,
  }),
  'alignItems'
)

Grid.displayName = 'Grid'

export default Grid
