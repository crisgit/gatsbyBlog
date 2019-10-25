import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button, Card, CardBody, CardTitle } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext

    return (
        <Layout pageTitle="Tags do Tema">
            <SEO title="Tags do Tema" keywords={['tags', 'topics']} />

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

            <ul>
                {tags.map(tag => (
                    <li key={tag} style={{ marginBottom: '10px' }}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
                        </Button>
                    </li>
                ))}
            </ul>

         

        </Layout>
    )
}

export default tagsPage