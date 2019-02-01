import React from 'react'
import Header from './Header'
import { GlobalStyle } from '../styles/GlobalStyle'
import { StaticQuery, graphql } from 'gatsby'

//queries
const SITE_TITLE_QUERY = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
    }
`

const Layout = ({ children }) => (
    <StaticQuery
        query={SITE_TITLE_QUERY}
        render={data => (
            <>
                <GlobalStyle />
                <Header title={data.site.siteMetadata.title} />
                <main>
                    {children}
                </main>
            </>
        )}
    />
)

export default Layout
