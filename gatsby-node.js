const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if(node.internal.type === 'MarkdownRemark'){
		let pathInfo = path.normalize(node.fileAbsolutePath).split(path.sep)
		createNodeField({node, name: 'type', value: 'blog'})
		createNodeField({node, name: 'year', value: pathInfo[pathInfo.length - 2]})
		createNodeField({node, name: 'url', value: '/blog/' + pathInfo[pathInfo.length - 2] + '/' + pathInfo[pathInfo.length - 1].slice(0, -3) + '/'})
	}
}

exports.createPages = async({actions, graphql}) => {
	const posts = await graphql(`{ allMarkdownRemark(filter: {fields: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) { nodes { fields { url } } } }`)
	
	const postTemplate = path.resolve('./src/templates/post.js')

	posts.data.allMarkdownRemark.nodes.forEach(({fields}, index) => {
		actions.createPage({
			path: fields.url,
			component: postTemplate,
			context: {
				currPost: fields.url,
				prevPost: (posts.data.allMarkdownRemark.nodes.length <= (index + 1)) ? '' : posts.data.allMarkdownRemark.nodes[index + 1].fields.url
			}
		})
	})
}