const path = require('path')

const PostTemplate = path.resolve('./src/templates/post-template.js') 

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
        allContentfulPost {
          edges {
            node {
                slug
            }
          }
        }
      }
    `)

    const posts = result.data.allContentfulPost.edges

    posts.forEach(({ node: post }) => {
        createPage({
            path: `posts/${post.slug}`,
            component: PostTemplate,
            context: {
                slug: post.slug
            }
        })
    })


}