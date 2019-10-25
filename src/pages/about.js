import React from 'react'

import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout pageTitle="Contato">
    <SEO title="Contato" keywords={[`contato`, `newsletter`, `blog`]} />

    <p>Serviços de desenvolvimento de sites e apps. </p>
    <strong> Em que posso lhe ajudar? Entre em contato para maiores informações.</strong>

    <Form name="contato" method="post" data-netlify="true" data-netlify-honeypot="bot-field">

      <ul>
        <li>
          <h4>
            <span class="text-center">
              <br />
              <p><em>* Formulário de Contato:</em></p></span>
            <hr />
            <br />
          </h4>
        </li>
      </ul>

      <input type="hidden" name="form-name" value="contato" required />

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Nome: </Label>
        <Col sm={10}>
          <Input type="text" name="name" id="idNome" placeholder="Digite o seu Nome" required />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>E-mail: </Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="seuemail@mail.com" required />
          <FormText >Digite o seu e-mail </FormText>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleText" sm={2}>Mensagem: </Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" placeholder="Digite aqui o seu assunto" required />
        </Col>
      </FormGroup>

     <FormGroup row>
        <Label for="checkbox2" sm={2}> Newsletter: </Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" required />{' '}
              Aceito receber informativos do site por e-mail
          </Label>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Não aceito receber informativos do site por e-mail
          </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <br />
          <Button outline color="success" size="lg" block> Enviar </Button>
          <br />
          <br />
        </Col>
      </FormGroup>

    </Form>

  </Layout>
)

export default AboutPage
