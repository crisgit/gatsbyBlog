import React from 'react'

import { Card, CardBody, CardTitle } from 'reactstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'
import PaginationLinks from '../components/PaginationLinks'

const IndexPage = () => {
  const postsPerPage = 2
  let numberOfPages
  return (
    <Layout pageTitle="Digital Blog">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/*<h1>Posts</h1>*/}

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

      <StaticQuery
        query={indexQuery}
        render={data => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  author={node.frontmatter.author}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              ))}
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
query indexQuery {
  allMarkdownRemark (
    sort: { fields: [frontmatter___date], order: DESC}
    limit: 2
    ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date (formatString: "MMM Do YYYY")
          author
          tags
          image{
            childImageSharp{
              fluid(maxWidth:600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
