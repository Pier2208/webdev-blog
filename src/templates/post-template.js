import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

const Container = styled.div`
    width: 75%;
    margin: 0 auto;
`

export default ({ data }) => (
    <Layout>
        <Img style={{ height: '400px' }} fluid={data.contentfulPost.coverImage.fluid} />
        <Container>
            <h1 style={{ fontSize: '3rem' }}>{data.contentfulPost.title}</h1>
            <p>{data.contentfulPost.author} - {data.contentfulPost.createdAt}</p>
            <div style={{fontSize: '2rem'}}dangerouslySetInnerHTML={{
                __html: data.contentfulPost.content.childMarkdownRemark.html
            }} />
        </Container>
    </Layout>
)

export const query = graphql`
    query ($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
        title
        author
        slug
        content {
            childMarkdownRemark {
            html
            }
            }
            coverImage{
                fluid(maxWidth: 1000) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

