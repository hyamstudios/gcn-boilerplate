import React from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Table = styled.table`
  ${tw`w-full align-top`};
  td,
  th {
    ${tw`p-1 pt-0 pb-4 border-gray-600 border-r`};
    &:last-child {
      border-right: 0;
    }
    &:empty {
      border-top: 1px solid transparent;
    }
  }
  thead,
  tr:not(:last-child) {
    ${tw`border-b border-gray-600`};
  }
`;

const TDDescription = props => (
  <td>
    <p className="max-w-xl" {...props} />
  </td>
);

// eslint-disable-next-line jsx-a11y/anchor-has-content
const ExternalLink = props => <a className="underline hover:no-underline" target="_blank" {...props} />;

export default () => (
  <Layout>
    <Table>
      <thead className="text-left">
        <tr>
          <th className="w-1/12" />
          <th className="w-1/6">Term</th>
          <th className="w-1/3">Description</th>
        </tr>
      </thead>
      <tbody className="align-top">
        <tr>
          <td>post-fixes</td>
          <td>enter/leave</td>
          <TDDescription>
            The element will enter/leave our field of view. The term comes from theater (one enters/leave the stage)
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>in/out</td>
          <TDDescription>
            The terms signify the intention of the movement. The element will do something to come &quot;in&quot; or go &quot;out&quot; of
            the view
          </TDDescription>
        </tr>
        <tr>
          <td>properties</td>
          <td>opacity/alpha</td>
          <TDDescription>
            It means the transparency of the color or the object. It is usually defined as a single value ranged between 0 ~ 1, or 0% to
            100%.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>origin/transform origin</td>
          <TDDescription>
            An imaginary point belonging to an object. When the object rotates/resizes, the part on the origin point will stay at the same
            position. Example: a spinning basketball on your finger, the origin point is where the basketball touches your fingertip. When
            you resize a window on your mac, the origin point is the opposite corner of where you are grabbing with your cursor. When you
            hold &quot;option&quot;, the origin point will come to the center of the window.
          </TDDescription>
        </tr>

        <tr>
          <td>effect</td>
          <td>fade</td>
          <TDDescription>A style of transition. Opacity/alpha changes from zero, or to zero.</TDDescription>
        </tr>
        <tr>
          <td />
          <td>move/translate</td>
          <TDDescription>
            A style of transition. The position of the target changes. Usually in transition it means that it will move out/into the field
            of view. Direction can be appended after the word to signify direction.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>push</td>
          <TDDescription>
            A style of transition. It means the entering and leaving elements are moving at the same speed, same time that makes it feels
            like one is pushing another. When a push-in happens, a push-out also happens on the opposite element, therefore it is uncommon
            to say &quot;push-in&quot; or &quot;push-out&quot;.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>wipe</td>
          <TDDescription>
            A style of transition. It can be understand as if the leaving element is being &quot;wiped out&quot; from a whiteboard, and then
            the entering element is revealed below. This effect is very popular in older film/TV productions (such as Rocky Horror Picture
            Show). Direction is usually supplied when describing the effect, such as wipe from bottom, wipe from top right... etc.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>flip</td>
          <TDDescription>
            A style of transition. The entering and leaving elements are on the two sides of a card (as if a postcard). The card rotates for
            180 degree to show the other side (the entering element). Usually just by &quot;flip&quot; it means the card revolves around its
            geometric center, on either of its horizontal/vertical axis, so when the flip is done, the card is in the exact same position
            and shape.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>scale</td>
          <TDDescription>
            scale-in: the entering element grows from a single dot or sometimes a single line, into a visible area.
            <br /> scale-out: the leaving element shrinks from its original shape into an invisible dot, or line.
            <br /> <br /> It is important to specify the transform origin and the changing axis in this effect. Scale-up/down is also used
            to refer to scale-in/out. However it can be confused with the direction of the transition.
          </TDDescription>
        </tr>

        <tr>
          <td>grouping</td>
          <td>stagger</td>
          <TDDescription>
            when a number of elements move together, with a slight difference in each element&#39;s transition. The difference is most often
            in the time when they start.
          </TDDescription>
        </tr>

        <tr>
          <td>compounds</td>
          <td>pop-in</td>
          <TDDescription>
            a fast, drastic scale-in, sometimes with a subtle fade-in. Simulating an element suddenly appears into the space.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>pop-out</td>
          <TDDescription>
            a fast, drastic scale-out, often accompanied with a visible fade-out. Simulating something disappear magically on the spot.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>swipe-in</td>
          <TDDescription>
            means elements do move-in/out according to the continuous user input (a finger moving on the screen)
          </TDDescription>
        </tr>

        <tr>
          <td>easing</td>
          <td>ease/easing</td>
          <TDDescription>
            describes the emotion, appearance of the movement. The in/out postfixes have nothing to do with the applied target&#39;s
            enter/leave status. See below for description. Easing is a vital part to make the animation more convincing/natural in the
            applied context.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>ease-in</td>
          <TDDescription>the speed starts slow and increase throughout the movement.</TDDescription>
        </tr>
        <tr>
          <td />
          <td>ease-out</td>
          <TDDescription>the speed starts fast and decrease throughout the movement.</TDDescription>
        </tr>
        <tr>
          <td />
          <td>ease-in-out</td>
          <TDDescription>
            pronounced as &quot;ease in and out&quot;, the speed starts and ends slow, only in the middle of the movement it speeds up. Most
            of the movements in our daily life has an ease-in and ease-out, sometimes even some off-shoot.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>linear</td>
          <TDDescription>the speed throughout the movement is constant.</TDDescription>
        </tr>
        <tr>
          <td />
          <td>overshoot</td>
          <TDDescription>
            means the target moves beyond the destination, Most of the movements in our daily life has off-shoot, especially organic,
            unprecise movements.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>Penner&#39;s functions</td>
          <TDDescription>
            Popular easings made from simple mathematic formulas, please visit
            <h3 className="mt-4 font-bold">Reference:</h3>
            <ExternalLink href="https://easings.net/en">https://easings.net/en</ExternalLink> for examples.
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>physical-based spring easing</td>
          <TDDescription>
            Popular method to ease things without clearly defined destination and duration, especially popular in UI as user input is
            sometimes unpredictable.
            <h3 className="mt-4 font-bold">Reference:</h3>
            <ExternalLink href="https://animejs.com/documentation/#springPhysicsEasing">
              https://animejs.com/documentation/#springPhysicsEasing
            </ExternalLink>
          </TDDescription>
        </tr>
        <tr>
          <td />
          <td>Cubic Bezier Curve</td>
          <TDDescription>
            cubic bezier curve is a way to customize an easing curve. <h3 className="mt-4 font-bold">Reference:</h3>
            <ExternalLink href="https://matthewlein.com/tools/ceaser">https://matthewlein.com/tools/ceaser</ExternalLink>
          </TDDescription>
        </tr>
        <tr>
          <td>system</td>
          <td>transition</td>
          <TDDescription>TBD</TDDescription>
        </tr>
        <tr>
          <td />
          <td>tween</td>
          <TDDescription>TBD</TDDescription>
        </tr>
        <tr>
          <td />
          <td>timeline</td>
          <TDDescription>TBD</TDDescription>
        </tr>
        <tr>
          <td />
          <td>keyframe</td>
          <TDDescription>TBD</TDDescription>
        </tr>
      </tbody>
    </Table>
  </Layout>
);
