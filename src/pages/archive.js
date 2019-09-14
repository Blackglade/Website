import React from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

const Layout = styled.div`
	background: #F9F9F9;
	height: 100%;
	max-width: 1200px;
	margin: 0 auto;
`

const BlogPosts = styled.div`
	display: flex;
	margin-bottom: 2rem;
	flex-wrap: wrap;

	.post {
		padding-right: .5rem;
		height: 100%;
		width: 25%;
		margin-bottom: 1rem;

		@media (max-width: 768px){ width: 50%; }
		@media (max-width: 650px){ width: 100%; }

		div {
			background: white;
			height: 100%;
			transition: all .2s ease-in-out;
			&:hover{ 
				transform: scale(1.01);
				box-shadow: -4px 2px 8px 2px #ccc;
			}
		}

		h4, h5 { 
			font-weight: 300;
			font-size: 1rem;
			margin-left: 1rem; 
		}
	}
`

export default () => (
	<StaticQuery query={graphql`query BlogArchive { allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, skip: 7, filter: {fields: {type: {eq: "blog"}}}) { nodes { frontmatter { title date(formatString: "DD MMM YYYY") asset_folder } fields { year url } } } }`}
	render={data => (
		<Layout>
			<Helmet title='Archive' />
			<div style={{textAlign: 'center'}}>
				<h1 style={{fontWeight: 900, margin: '2rem 0 0'}}>Archive</h1>
			</div>
			{data.allMarkdownRemark.nodes.reduce((acc, cv) => {
				let pointer = acc.findIndex(el => el.year === cv.fields.year)
				let post = {
					title: cv.frontmatter.title,
					date: cv.frontmatter.date,
					folder: cv.frontmatter.asset_folder,
					url: cv.fields.url
				}
				if(pointer > -1){ acc[pointer].posts.push(post) }
				else { acc.push({ year: cv.fields.year, posts: [post] }) }

				return acc
			}, []).map((section, index) => (
				<div key={index} style={{margin: '0 2rem'}}>
					<h3 style={{textAlign: 'left'}}>{section.year}</h3>
					<BlogPosts>
						{section.posts.map((post, i) => (
						<div key={i} className='post'><Link to={post.url} style={{opacity: 1}}>
							<div>
								<img alt={post.title} src={require(`../../blog/${section.year}/assets/${post.folder}/header.jpg`)} />
								<h4>{post.title}</h4>
								<h5 style={{color: '#aaa', paddingBottom: '1rem'}}>{post.date}</h5>
							</div>
						</Link></div>
						))}
					</BlogPosts>
				</div>
			))}
			<h3><Link style={{color: '#6200EA', marginLeft: '2rem'}} to='/'>home</Link> | <Link style={{color: '#6200EA'}} to='/blog'>blog</Link></h3>
		</Layout>
	)} />
)