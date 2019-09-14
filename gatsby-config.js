module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/projects`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-prismjs`,
					`gatsby-remark-responsive-iframe`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-external-links`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 960,
							linkImagesToOriginal: false,
							quality: 100,
						},
					},
				],
			},
		},
	],
}
