import React, {useState} from 'react'
import {Link} from 'gatsby'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

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

const GitHub = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
		<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 
		5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 
		2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
		8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 
		0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 
		72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 
		2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 
		61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
		75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 
		352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 
		1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 
		6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 
		2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
	</svg>
)

const File = () => (
	<svg style={{width: '1.7rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
		<path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 
		0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 
		4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 
		8.8-7.2 16-16 16zm-48-244v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 
		5.4 12 12zm0 64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm0 
		64v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12z"/>
	</svg>
)

export default () => {
	const[x, setX] = useState(40)
	const[y, setY] = useState(20)
	const[toggle, setToggle] = useState(false)
	return(
		<Layout onMouseMove={(e) => setX((e.pageX/100) + 40) & setY((e.pageY/100) + 20)} onTouchMove={(e) => setX((e.pageX/100) + 40) & setY((e.pageY/100) + 20)}>
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<Center>
				<Helmet title='Harsh Baid' /> 
				<Name style={{ backgroundPosition: `${x}% ${y}%` }}>Harsh Baid</Name>
				{(toggle) ? 
					(<h4 style={{opacity: 0.8}}>harsh@harshbaid.com</h4>) :
					(<h4>/ <Link to='/about/'>about</Link> /</h4>) 
				}
				<a aria-label="Email" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} href="mailto:harsh@harshbaid.com"><Email /></a>
				<a aria-label="Github" href="https://github.com/Blackglade" rel="noopener noreferrer" target="_blank"><GitHub /></a>
				<a aria-label="Resume" href="/resume.pdf" rel="noopener noreferrer" target="_blank"><File /></a>
				<a aria-label="YouTube" href="https://www.youtube.com/channel/UC7TyXaKgEHiq4s15dSgInJQ/" rel="noopener noreferrer" target="_blank"><YouTube /></a>
			</Center>
		</Layout>
	)
}