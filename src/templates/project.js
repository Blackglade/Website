import React from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'

const Layout = styled.div`
	max-width: 1200px;
	padding: 0 2rem;
	margin: 0 auto;
	a { color: #6200EA; }
	img { margin: 3rem 0; }
`


export default ({data}) => (
	<Layout>
		<Helmet title={data.markdownRemark.frontmatter.title} />
		<img alt={data.markdownRemark.frontmatter.title} src={require(`../../projects/assets/${data.markdownRemark.frontmatter.folder}/header.jpg`)} />
		<h2 style={{margin: 0, lineHeight: '100%'}}>{data.markdownRemark.frontmatter.title}</h2>
		<h4 style={{fontWeight: 300}}>{data.markdownRemark.frontmatter.tagline}</h4>
		<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
		<hr />
		<h4 style={{margin: '1rem 0'}}><Link to='/'>home</Link> | <Link to='/projects'>projects</Link></h4>
	</Layout>
)

export const projectQuery = graphql`
	query Project($url: String!){
		markdownRemark(fields: {url: {eq: $url}}) {
			frontmatter {
				title
				date(formatString: "DD MMM YYYY")
				folder
				tagline
			}
			html
		}
	}
`