import React from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from 'styled-components'


const Layout = styled.div`
	height: 100vh;
	overflow-x: hidden;
	overflow-y: auto;
	perspective: 2px;

	a { color: #6200EA; }
`

const Background = styled.div`
	height: 50vw;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	@media (max-width: 500px){
		height: 70vw;
	}

	&:after {
		content: ' ';
		position: ${props => props.position};
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		transform: translateZ(-1px) scale(1.5);
		background-size: 100%;
		filter: brightness(50%);
		z-index: -1;
		background: url(${props => props.img});
		background-position: top center;
		background-size: contain
		width: 100vw;
		height: ${props => props.height};
	}

	h2, h4 {
		margin: 0;
		color: #FFF;
		font-weight: 300;
	}
`

const Content = styled.div`
	height: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 1rem;

	img {
		margin-bottom: 2rem;
	}
`


export default ({data, pageContext}) => (
	<Layout>
		<Helmet title={data.currPost.frontmatter.title} />
		<Background position='fixed' img={require(`../../blog/${data.currPost.fields.year}/assets/${data.currPost.frontmatter.asset_folder}/header.jpg`)}>
			<h2>{data.currPost.frontmatter.title}</h2>
			<h4>{data.currPost.frontmatter.date}</h4>
		</Background>
		<div style={{background: '#FFF'}}>
			<Content dangerouslySetInnerHTML={{ __html: data.currPost.html }} />
		</div>
		{(pageContext.prevPost === '' ) ?
			(<div style={{textAlign: 'center', margin: '2rem 0'}}>
				<h3><Link to={'/'}>home</Link> | <Link to={'/blog'}>blog</Link></h3>
			</div>) : 
			(<Link to={pageContext.prevPost}>
				<Background style={{overflow: 'hidden', height: '25vh'}} position='absolute' height='50vh' img={require(`../../blog/${data.prevPost.fields.year}/assets/${data.prevPost.frontmatter.asset_folder}/header.jpg`)}>
					<h4 style={{letterSpacing: '.1rem', fontWeight: 700}}>Previous Story</h4>
					<h2>{data.prevPost.frontmatter.title}</h2>
				</Background>
			</Link>)
		}
	</Layout>
)

export const postQuery = graphql`
	query Post($currPost: String!, $prevPost: String!){
		currPost: markdownRemark(fields: {url: {eq: $currPost}}) {
			frontmatter {
				title
				date(formatString: "DD MMM YYYY")
				asset_folder
			}
			fields {
				year
			}
			html
		}
		prevPost: markdownRemark(fields: {url: {eq: $prevPost}}) {
			frontmatter {
				title
				asset_folder
			}
			fields {
				year
			}
			html
		}
	}
`