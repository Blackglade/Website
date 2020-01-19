import React from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

const Layout = styled.div`
	background: #F9F9F9;
	height: 100%;
	max-width: 1264px;
	margin: 0 auto;

	h3 {
		margin-bottom: 2rem;
		text-align: center;
		a { color: #6200EA; }
	}
`

const Title = styled.h1`
	font-weight: 900;
	margin: 4rem 0 0;

	span {
		color: #6200EA;
		font-style: italic;
	}
`
const BlogPosts = styled.div`
	display: flex;
	margin: 4rem 1rem 2rem;
	flex-wrap: wrap;

	.post {
		padding: .5rem;
		height: 100%;

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
			margin-left: 1rem; 
		}

		@media (min-width: 768px){
			&:nth-child(1) { width: 100%; }
			&:nth-child(2), &:nth-child(3)  { width: 50%; }
			&:nth-child(n+4) { 
				h4, h5 { font-size: 1rem; }
				width: 25%; 
			}
		}
	}
`

export default () => (
	<StaticQuery query={graphql`query BlogPosts { allMarkdownRemark(limit: 7, sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {type: {eq: "blog"}}}) { nodes { frontmatter { title date(formatString: "DD MMM YYYY") asset_folder } fields { year url } } } }`}
	render={data => (
		<Layout>
			<Helmet title='Blog' />
			<div style={{textAlign: 'center'}}>
				<Title>BORED <span>+</span> LAZY</Title>
				<h5 style={{fontWeight: 300, letterSpacing: '0.1rem'}}>known to cause insanity amongst humans</h5>
			</div>
			<BlogPosts>
				{data.allMarkdownRemark.nodes.map((post, index) => (
					<div key={index} className='post'><Link to={post.fields.url} style={{opacity: 1}}>
						<div>
							<img alt={post.frontmatter.title} src={require(`../../blog/${post.fields.year}/assets/${post.frontmatter.asset_folder}/header.jpg`)} />
							<h4>{post.frontmatter.title}</h4>
							<h5 style={{color: '#aaa', paddingBottom: '1rem'}}>{post.frontmatter.date}</h5>
						</div>
					</Link></div>
				))}
			</BlogPosts>
			<h3><Link to='/'>home</Link> | <Link to='/archive'>archive</Link></h3>
		</Layout>
	)} />
)