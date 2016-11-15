// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import {capitalize} from 'lodash'
import Helmet from 'react-helmet'
import React from 'react'

import ListItem from 'numenta-web-shared-components/ListItem'
import ListOrder from 'numenta-web-shared-components/ListOrder'
import Paragraph from 'numenta-web-shared-components/Paragraph'
import Section from 'numenta-web-shared-components/Section'
import {sortOrderAscend} from 'numenta-web-shared-utils/shared'
import Spacer from 'numenta-web-shared-components/Spacer'
import Subtle from 'numenta-web-shared-components/Subtle'
import TextLink from 'numenta-web-shared-components/TextLink'

import styles from './index.css'

const title = 'Research Papers'


/**
 * Research Papers page and MainSection wrapper - React view component.
 */
const PapersPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^papers\/.*\.md/)))
  const items = posts.sort(sortOrderAscend).map(({data, file}) => {
    const categoryNice = capitalize(data.category.replace(/-/, ' '))
    return (
      <ListItem key={file.stem}>
        <div className={styles.paper}>
          <div className={styles.title}>
            <TextLink to={data.link}>
              {data.title}
            </TextLink>
          </div>
          <div className={styles.meta}>
            <Subtle>
              {data.author}
              <Spacer />
              {categoryNice}
              <br />
              {data.org}
              <Spacer />
              {data.date}
            </Subtle>
          </div>
          <Paragraph>
            {data.brief}
          </Paragraph>
        </div>
      </ListItem>
    )
  })

  return (
    <article className={styles.papers}>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <ListOrder copy={false}>
          {items}
        </ListOrder>
      </Section>
    </article>
  )
}

PapersPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PapersPage