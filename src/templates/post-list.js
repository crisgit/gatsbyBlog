import React from 'react'
import Layout from '../components/layout'
import { Card, CardBody, CardTitle } from 'reactstrap';
import Post from '../components/Post'
import { graphql } from 'gatsby'
import PaginationLinks from '../components/PaginationLinks'


const postList = (props) => {
    const posts = props.data.allMarkdownRemark.edges
    const { currentPage, numberOfPages } = props.pageContext

    return (
        <Layout pageTitle={`Página: ${currentPage}`}>

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
            
            {posts.map(({ node }) => (
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
            <PaginationLinks
                currentPage={currentPage}
                numberOfPages={numberOfPages}
            />

            

        </Layout>
    )
}

export const postListQuery = graphql`
    query postListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
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

export default postList