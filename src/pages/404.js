import React from 'react'
import { Link } from 'gatsby'
import { Card, CardBody, CardTitle, Jumbotron } from 'reactstrap';
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout pageTitle="Not found">
    <SEO title="404: Not found" />

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

    <div>
      <Jumbotron>
        <h1 className="display-3">Error 404 </h1>
        <p className="lead"> Desculpe, mas essa página não existe mais ou a Url digitada não existe. </p>
        <hr className="my-2" />
        <p> <strong> Você pode retornar à página inicial no botão abaixo. </strong> </p>
        <br />
        <p className="lead">
          <Link className="btn btn-primary text-uppercase" to={'/'}> Home </Link>
        </p>
      </Jumbotron>
    </div>

  </Layout>
)

export default NotFoundPage
