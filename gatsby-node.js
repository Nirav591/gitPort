/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result
        })
    )
})

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
    actions.createTypes([
        schema.buildObjectType({
            name: 'StrapiDraw',
            interfaces: ['Node'],
            fields: {
                isFuture: {
                    type: 'Boolean!',
                    resolve: source => new Date(source.date_of_draw) > new Date(),
                },
            },
        }),
    ]);
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const generateProductPages = makeRequest(graphql, `
        {
            allStrapiLottery {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `).then(result => {
        result.data.allStrapiLottery.edges.forEach(({ node }) => {
            createPage({
                path: `/products/${node.slug}`,
                component: path.resolve(`src/templates/product.js`),
                context: {
                    id: node.id,
                    slug: node.slug
                }
            })
        })
    })

    return Promise.all([generateProductPages])
}