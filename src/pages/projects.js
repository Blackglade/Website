import React from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

const Layout = styled.div`
	height: 100%;
	margin: 0 auto;
	padding: 0 2rem;
	max-width: 1264px;

	a { color: #6200EA; }

	.projects {
		a { opacity: 1; }
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		img {
			margin-bottom: 0;
			transition: transform 200ms ease-in-out;

			&:hover { 
				transform: scale(1.07);
				animation: rainbow 4s steps(36) infinite;
			}

			@keyframes rainbow {
				from { filter: hue-rotate(0deg);  }
				to { filter: hue-rotate(360deg); }
			}
		}
	}
`

export default () => (
	<StaticQuery query={graphql`query Projects { allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {type: {eq: "projects"}}}) { nodes { frontmatter { title folder } fields { url } } } }
`}
	render={data => (
		<Layout>
			<Helmet title='Projects' />
			<h1 style={{fontWeight: 900, margin: '1rem 0', textAlign: 'center'}}>PROJECTS</h1>
			<div className='projects'>
				{data.allMarkdownRemark.nodes.map((project, index) => (
					<Link to={project.fields.url}>
						<img alt={project.frontmatter.title} src={require(`../../projects/assets/${project.frontmatter.folder}/tile.jpg`)} />
					</Link>
				))}
			</div>
			<h3 style={{marginTop: '1rem'}}><Link to='/'>home</Link></h3>
		</Layout>
	)} />
)