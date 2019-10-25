import React from 'react'
import { Card, CardTitle, CardBody, CardText, Form, FormGroup, Input } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/fontawesome-free-brands'


const Sidebar = ({ author, authorFluid }) => (
    <div>
        {author && (
            <Card>
                <Img className="card-image-top" fluid={authorFluid} />
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3"> {author.name} </CardTitle>
                    <CardText>{author.bio}</CardText>
                    <div className="author-social-links text-center">
                        <ul>
                            <li><a href={author.facebook} target="_blank" rel="noopener noreferrer" className="facebook"> <FontAwesomeIcon className='font-awesome' icon={faFacebook} size="2x" /> </a></li>
                            <li><a href={author.twitter} target="_blank" rel="noopener noreferrer" className="twitter"> <FontAwesomeIcon className='font-awesome' icon={faTwitter} size="2x" /> </a></li>
                            <li><a href={author.google} target="_blank" rel="noopener noreferrer" className="google"> <FontAwesomeIcon className='font-awesome' icon={faGoogle} size="2x" /> </a></li>
                            <li><a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">  <FontAwesomeIcon className='font-awesome' icon={faLinkedin} size="2x" /> </a></li>
                            <li><a href={author.instagram} target="_blank" rel="noopener noreferrer" className="instagram"><i className="fab fa-instagram fa-lg"></i></a></li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        )}

        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    PUBLICIDADE
                </CardTitle>
                <img
                    src="https://via.placeholder.com/300x250"
                    alt="Advert"
                    style={{ width: "100%" }}
                />
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Posts Recentes
                </CardTitle>
                <StaticQuery query={sidebarQuery} render={(data) => (
                    <div>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Card key={node.id}>
                                <Link to={node.fields.slug}>
                                    <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                                </Link>
                                <CardBody>
                                    <CardTitle>
                                        <Link to={node.fields.slug}>
                                            {node.frontmatter.title}
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                )} />
            </CardBody>
        </Card>

        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase-mb-3">
                    Newsletter
                </CardTitle>
            </CardBody>
            <Form className="text-center">
                <FormGroup>
                    <Input type="email"
                        name="email"
                        placeholder="Digite o seu email "
                    />
                </FormGroup>
                <button className="btn btn-outline-success text-uppercase">
                    Subscribe
               </button>
                <br /><br />
            </Form>
        </Card>
    </div>
)

const sidebarQuery = graphql`
    query sidebarQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
        ) {
            edges{
                node{
                    id
                    frontmatter{
                        title
                        image{
                            childImageSharp{
                                fluid(maxWidth: 300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }

`

export default Sidebar