import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import authors from '../util/authors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { DiscussionEmbed } from 'disqus-react'

const SinglePost = ({ data, pageContext, location }) => {
    const post = data.markdownRemark.frontmatter
    const author = authors.find(x => x.name === post.author)

    const baseUrl = 'https://webnow.site'

    const disqusShortname = 'crisgit'
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }


    return (
        <Layout
            pageTitle={post.title}
            postAuthor={author}
            authorImageFluid={data.file.childImageSharp.fluid}
        >
            <SEO
                author={post.author}
                title={post.title}
                //title={post.title}
                keywords={post.tags}
                description={post.description}
                url={baseUrl}
                pathname={location.pathname}
            />
            {/* <h1>{post.title}</h1> */}

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

            <Card>
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
                <CardBody>
                    <CardSubtitle>
                        <span className="text-info">{post.date}</span> by{' '}
                        <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                    <ul className="post-tags">
                        {post.tags.map(tag => (
                            <li key={tag}>
                                <Link to={`/tag/${slugify(tag)}`}>
                                    <Badge color="primary">{tag}</Badge>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBody>

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

            </Card>
            <h3 className="text-center"> Compartilhe este Post: </h3>
            <div className="text-center social-share-links">
                <ul>
                    <li>
                        <a href='https://www.facebook.com/sharer/sharer.php?u=https://digitalblog.press/' className="facebook" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='font-awesome' icon={faFacebook} size="2x" />
                        </a>
                    </li>

                    <li>
                        <a href='https://twitter.com/share?url=https://digitalblog.press/' className="twitter" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='font-awesome' icon={faTwitter} size="2x" />
                        </a>
                    </li>

                    <li>
                        <a href='https://plus.google.com/share?url=https://digitalblog.press/' className="google" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='font-awesome' icon={faGoogle} size="2x" />
                        </a>
                    </li>

                    <li>
                        <a href='https://www.linkedin.com/shareArticle?mini=true&url=https://digitalblog.press/&title=&summary=&source=' className="linkedin" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='font-awesome' icon={faLinkedin} size="2x" />
                        </a>
                    </li>

                </ul>
            </div>

            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!, $imageUrl: String!){
                markdownRemark(fields: {slug: {eq: $slug } }) {
                id
                html
            frontmatter {
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image {
                childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
}
        file(relativePath: {eq: $imageUrl }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SinglePost