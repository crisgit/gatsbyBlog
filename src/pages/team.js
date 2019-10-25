import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import authors from '../util/authors'
import { Button, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'
import NewsImage from '../images/postNews.png'
import TechImage from '../images/postTech.png'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Posts">
    <SEO title="Posts" keywords={[`posts`, `tech`, `news`]} />

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
    
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={NewsImage} style={{ maxWidth: '100%' }} alt="Post news" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              Veja mais
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>

    <Row className="mb-4">
      <div className="col-md-3">
        <img src={TechImage} style={{ maxWidth: '100%' }} alt="Jane profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%' }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button
              className="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[1].name)}`}
            >
              Veja Mais
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
