/* eslint-disable react/no-children-prop, react/jsx-key */
import React from 'react'

import { Cartesian } from '@compositor/kit'

import { ExpandCollapse, Accordion } from '../../../packages/ExpandCollapse'

const CartesianAccordion = props => (
  <div style={{ width: '25%' }}>
    <Accordion {...props} />
  </div>
)

const CartesianExpandCollapse = props => (
  <div style={{ width: '25%' }}>
    <ExpandCollapse {...props} />
  </div>
)

const CartesianAll = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
    <Cartesian
      component={CartesianExpandCollapse}
      open={[[], ['features'], ['features', 'specs']]}
      topDivider={[true, false]}
      compact={[true, false]}
      children={[
        [
          <ExpandCollapse.Panel id="features" header="Features">
            Connected GPS - Connect to your phone&apos; GPS to see real-time run stats.
          </ExpandCollapse.Panel>,
          <ExpandCollapse.Panel id="specs" header="Specs">
            Display - OLED
          </ExpandCollapse.Panel>,
        ],
        [
          <ExpandCollapse.Panel id="features" header="Features">
            Connected GPS - Connect to your phone&apos;s GPS to see real-time run stats.
          </ExpandCollapse.Panel>,
          <ExpandCollapse.Panel id="specs" header="Specs" />,
        ],
      ]}
    />
    <Cartesian
      component={CartesianAccordion}
      open={[undefined, 'features', 'specs']}
      topDivider={[true, false]}
      children={[
        [
          <ExpandCollapse.Panel id="features" header="Features">
            Connected GPS - Connect to your phone&apos;s GPS to see real-time run stats.
          </ExpandCollapse.Panel>,
          <ExpandCollapse.Panel id="specs" header="Specs">
            Display - OLED
          </ExpandCollapse.Panel>,
        ],
        [
          <ExpandCollapse.Panel id="features" header="Features">
            Connected GPS - Connect to your phone&apos;s GPS to see real-time run stats.
          </ExpandCollapse.Panel>,
          <ExpandCollapse.Panel id="specs" header="Specs" />,
        ],
      ]}
    />
  </div>
)

export default { name: 'ExpandCollapse', Component: CartesianAll }
