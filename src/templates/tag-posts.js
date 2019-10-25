import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Card, CardBody, CardTitle } from 'reactstrap'
import Post from '../components/Post'

const tagPosts = ({ data, pageContext }) => {
    const { tag } = pageContext
    const { totalCount } = data.allMarkdownRemark
    const pageHeader = `${totalCount} post${
        totalCount === 1 ? '' : 's'
        } tagged in "${tag}"`

    return (
        <Layout pageTitle={pageHeader}>

            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        PUBLICIDADE
                     </CardTitle>
                    <img
                        src="https://via.placeholder.com/320x50"
                        alt="Advert"
                        style={{ width: "100%" }}
                    />
                </CardBody>
            </Card>

            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                    key={node.id}
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    tags={node.frontmatter.tags}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                />
            ))}
        </Layout>
    )
}

export const tagQuery = graphql`
    query($tag: String!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM Do YYYY")
                        author
                        tags
                        image {
                            childImageSharp {
                                fluid( maxWidth: 650, maxHeight: 371) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

export default tagPosts