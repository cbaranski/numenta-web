// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import NextSection from 'numenta-web-shared-components/NextSection'
import {scrollToSection} from 'numenta-web-shared-utils/client'
import Section from 'numenta-web-shared-components/Section'

import MainSections, {getNextSection} from '../_MainSections'
import SectionResources from './_Section'

const Default = (<SectionResources key="sectionResources" />)
const title = 'Papers, Videos & More'


/**
 * Papers Videos and More page, MainSection wrapper - React view component.
 */
class PapersPage extends React.Component {

  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section headline={true} open={true} title={title}>
          {Default}
          <NextSection {...next} />
        </Section>
      ),
    }
  }

  componentDidMount() {
    this.setState({
      sections: (<MainSections current={Default} />),
    })
  }

  componentDidUpdate() {
    scrollToSection(global.document.getElementById(Default.key))
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return (
      <div>
        <Helmet title={title} />
        {sections}
      </div>
    )
  }
}

export default PapersPage