/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import * as React from 'react'
import { navigate } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled.h1>NOT FOUND</Styled.h1>
    <Styled.p>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Styled.p>
    <Styled.a href="#" onClick={() => navigate('/')}>
      Go back to the homepage
    </Styled.a>
  </Layout>
)

export default NotFoundPage
