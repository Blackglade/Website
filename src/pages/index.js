import React, {useState} from 'react'
import {Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import {GitHub, File} from '../styles/styledComps'
import '../styles/stars.scss'
import bg from '../images/bg.jpg'

const Layout = styled.div`
	height: 100%;
	overflow: hidden;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`

const Center = styled.div`
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	text-align: center;

	h4 {
		color: #FFF;
		margin: 0;
		
		a {
			color: #8a8a8a;

			&:hover {
				color: #FFF;
			}
		}
	}

	svg {
		width: 2.25rem;
		margin: 1rem 1rem 0;

		&:hover {
			fill: #FF0000;
			transform: scale(1.2);
			transition: all 150ms ease-in-out;
		}
	}
`

const Name = styled.h1`
	color: transparent;
	background: url(${bg}) repeat;
	background-size: 60rem;
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 700;
	font-size: 7.4rem;
	margin: 0;
	line-height: 100%;
`

const Email = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 
		48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 
		13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 
		16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 
		36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"/>
	</svg>
)

const YouTube = () => (
	<svg style={{width: '2.4rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
		<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 
		74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 
		89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 
		213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 
		11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
	</svg>
)

export default () => {
	const[x, setX] = useState(40)
	const[y, setY] = useState(20)
	const[toggle, setToggle] = useState(false)
	return(
		<Layout onMouseMove={(e) => setX((e.pageX/100) + 40) & setY((e.pageY/100) + 20)}>
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<Center>
				<Helmet title='Harsh Baid' /> 
				<Name style={{ backgroundPosition: `${x}% ${y}%` }}>Harsh Baid</Name>
				{(toggle) ? 
					(<h4 style={{opacity: 0.8}}>harsh@harshbaid.com</h4>) :
					(<h4><Link to='/projects/'>projects</Link> / <Link to='/blog/'>blog</Link> / <Link to='/about/'>about</Link></h4>) 
				}
				<a onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} href="mailto:harsh@harshbaid.com"><Email /></a>
				<a href="https://github.com/Blackglade" rel="noopener noreferrer" target="_blank"><GitHub /></a>
				<a href="/resume.pdf" rel="noopener noreferrer" target="_blank"><File style={{width: '1.7rem'}} /></a>
				<a href="https://www.youtube.com/channel/UC7TyXaKgEHiq4s15dSgInJQ/" rel="noopener noreferrer" target="_blank"><YouTube /></a>
			</Center>
		</Layout>
	)
}