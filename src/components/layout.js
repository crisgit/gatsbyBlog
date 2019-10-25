/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faLinkedin } from '@fortawesome/fontawesome-free-brands'

import Header from './header'
import Sidebar from './Sidebar'
import '../styles/index.scss'

import { Row, Col } from 'reactstrap'


const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content" >
        <h1>{pageTitle}</h1>
        <Row>
          <Col md="8"><main>{children}</main></Col>
          <Col md="4"><Sidebar author={postAuthor} authorFluid={authorImageFluid} /></Col>
        </Row>

        <footer className="site-footer">
          <div >
            <Nav vertical >
              <NavItem>
                <NavLink href="/" target="_self" rel="noopener noreferrer" > <strong> Home </strong> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/team" target="_self" rel="noopener noreferrer" > <strong> Posts </strong> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags" target="_self" rel="noopener noreferrer" > <strong> Tags </strong>  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" target="_self" rel="noopener noreferrer" > <strong> Contato </strong>  </NavLink>
              </NavItem>
            </Nav>
          </div>
          <hr />
          <div className="author-social-links text-center">
            <ul>
              <li>Compartilhe: </li>
              <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://webnow.site/" target="_blank" rel="noopener noreferrer" className="facebook"> <FontAwesomeIcon className='font-awesome' icon={faFacebook} size="2x" /> </a></li>
              <li><a href="https://twitter.com/share?url=https://webnow.site/" target="_blank" rel="noopener noreferrer" className="twitter"> <FontAwesomeIcon className='font-awesome' icon={faTwitter} size="2x" /> </a></li>
              <li><a href="https://plus.google.com/share?url=https://webnow.site/" target="_blank" rel="noopener noreferrer" className="google"> <FontAwesomeIcon className='font-awesome' icon={faGoogle} size="2x" /> </a></li>
              <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://webnow.site/&title=&summary=&source=" target="_blank" rel="noopener noreferrer" className="linkedin">  <FontAwesomeIcon className='font-awesome' icon={faLinkedin} size="2x" /> </a></li>
            </ul>
          </div>

          <br/>
          <br/>

          © {new Date().getFullYear()}, Todos os direitos reservados.
          {` `}
          <a href="https://webnow.site"> <strong> Web Now </strong> </a>
          <br /> <br />
        </footer >

      </div >
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
