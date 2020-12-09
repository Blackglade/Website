import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import me from '../images/me.jpg'
import glados from '../images/glados.gif'
import sound from '../images/garbage.mp3'
import favicon from '../images/favicon.png'

const Layout = styled.div`
	background: url(${favicon}) 0 0 repeat;

	.container {
		background: #F9F9F9;
		max-width: 1500px;
		margin: 0 auto;

		.wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 1rem;
		}
	}
`

const Perspective = styled.ul`
	list-style: none;
	margin-top: 12.5rem;
	margin-bottom: -10rem;
	width: 100%;

	li {
		display: flex;
		height: 16rem;
		margin-top: -13.5rem;

		div {
			width: 50%;
			overflow: hidden;

			h2 {
				width: 200%;
				text-align: center;
				font-weight: 300;
				white-space: nowrap;
			}

			&:nth-child(odd) h2 {
				transform: translateZ(0) rotate(-15deg) skewX(-15deg);
				color: red;
			}

			&:nth-child(even) h2 {
				transform: translateZ(0) rotate(15deg) skewX(15deg);
				margin-left: -100%;
				color: blue;
			}

			span { 
				display: inline-block;
				white-space: nowrap;
			}
		}
	}
`

const Bio = styled.div`
	text-align: center;

	span {
		font-weight: 700;
	}

	h3 svg text {
		stroke-dasharray: 500;
		stroke-dashoffset: 500;
		animation: dash 4s ease-in-out forwards infinite;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}

	h4 {
		display: inline;
		margin-bottom: 1rem;
		white-space: nowrap;
		
		&.color {
			color: transparent;
			background: linear-gradient(90deg, #FC466B 25%, #3F5EFB 75%);
			-webkit-background-clip: text;
		}

		&.blur {
			color: transparent;
			text-shadow: 0 0 5px rgba(0,75,177,0.7);
			transition: all 500ms ease-in-out;

			&:hover {
				color: rgb(0,75,177);
				text-shadow: none;
			}
		}

		&.security {
			z-index: 10;
			position: relative;
			&:before {
				content: 'Cyber Security';
				position: absolute;
				color: #00ffff;
				z-index: -1;
				left: 0;
				top: -3px;
				right: 0;
				animation: RP .1s infinite;
			}

			&:after {
				content: 'Cyber Security';
				position: absolute;
				color: #ff0000;
				z-index: -1;
				left: 0;
				top: -3px;
				right: 0;
				animation: FP .1s infinite; 
			}

			@keyframes RP {
				0% { right: 0; top: 0; } 
				50% { right: 3px;  top: -3px;}
				100% { right: 0; top: 0; } 
			}

			@keyframes FP {
				0% { right: 0; top: 0; } 
				50% { right: -3px;  top: 3px;}
				100% { right: 0; top: 0; } 
			}
		}
	}
`

const Heart = () => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
		<path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 
		53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'/>
	</svg>
)

const VideoGames = styled.div`
	margin-bottom: 2rem;
	position: relative;

	ul {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	}

	ul li {
		padding: .5rem;
		position: relative;
		z-index: 10;
		color: #000000;
		text-shadow: 1px 1px 0 #ffe53b, 2px 2px 0 #ffd427, 3px 3px 0 #ffc312, 4px 4px 0 #ffb100, 5px 5px 0 #ff9f00, 6px 6px 0 #ff8c00, 7px 7px 0 #ff7800, 8px 8px 0 #ff610f, 9px 9px 0 #ff481b, 10px 10px 0 #ff2525;
	}

	h3, h5 { margin: 0; z-index: 10; position: relative; }

	svg {
		width: 1.5rem;
		fill: #F44336;
		margin-top: -4px;
		animation: HeartBeat 3s ease-in-out infinite;
	}

	@keyframes HeartBeat {
		0% { transform: scale(1); }
		25% { transform: scale(1.25); }
		50% { transform: scale(1); }
		75% { transform: scale(1.25); }
		100% { transform: scale(1); }
	}

	h5 {
		font-weight: 300;
		margin-bottom: 1rem;
	}

	.glados { 
		opacity: 1; 
		margin: 0 auto;
		z-index: 2;
		position: absolute;
		top: -16px;
		right: 0;
		z-index: 2;
		width: 25%;
	}
`

export default () => {
	const[x, setX] = useState(0)
	const GLaDOS = (typeof Audio === `undefined`) ? 0 : new Audio(sound);

	return(
		<Layout onMouseMove={(e) => setX(e.pageX - ((typeof window === `undefined`) ? 0 : (window.innerWidth/2)))} onTouchMove={(e) => setX(e.pageX - ((typeof window === `undefined`) ? 0 : (window.innerWidth/2)))}>
			<Helmet title='About Me'/>
			<div className='container'><div className='wrapper'>
				<img style={{maxWidth: '100%', borderRadius: '100%', marginTop: '3rem'}} src={me} alt='Harsh Baid' />
				<Perspective>
					<li>
						<div><h2><span style={{transform: `translate3d(${x}px, 0px, 0px)`}}>WELCOME TO MY</span></h2></div>
						<div><h2><span style={{transform: `translate3d(${x}px, 0px, 0px)`}}>WELCOME TO MY</span></h2></div>
					</li>
					<li>
						<div><h2><span style={{transform: `translate3d(${x}px, 0px, 0px)`}}>CORNER OF THE</span></h2></div>
						<div><h2><span style={{transform: `translate3d(${x}px, 0px, 0px)`}}>CORNER OF THE</span></h2></div>
					</li>
					<li>
						<div><h2><span style={{transform: `translate3d(${x}px, 0px, 0px)`}}>INTERNET</span></h2></div>
						<div><h2><span style={{transform: `translate3d(${x}px, 0px, 0px)`}}>INTERNET</span></h2></div>
					</li>
				</Perspective>
				<Bio>
					<h3 style={{fontWeight: 300}}>I'm a <svg height="63px">
						<defs>
							<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%"   stop-color="#00dbde" stop-opacity="1.0" />
								<stop offset="100%" stop-color="#fc00ff" stop-opacity="1.0" />
							</linearGradient>
						</defs>
						<text stroke="url(#gradient)" stroke-width="2" style={{fontFamily: 'Roboto', fontWeight: '900'}} y="42" fontSize="2.25rem" fill="none">Software Engineer</text>
					</svg> w/ a passion for</h3>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<h4 className='blur'>Front-End Development</h4>
						<h4 className='color'>Design / Color Theory</h4>
						<h4 className='security'>Cyber Security</h4>
					</div>
				</Bio>
				<div style={{textAlign: 'left', maxWidth: '1000px', margin: '2rem 1rem 0'}}>
					<hr />
					<VideoGames>
						<h3 style={{lineHeight: '100%'}}>I <Heart /> Video Games!</h3>
						<h5>(these are some of my favorites)</h5>
						<img className='glados' src={glados} alt='Glados' onClick={() => GLaDOS.play()} onKeyDown={() => GLaDOS.play()} />
						<ul>
							<li>Age of Mythology</li>
							<li>Antichamber</li>
							<li>The Binding of Isaac</li>
							<li>Bioshock (Series)</li>
							<li>Cuphead</li>
							<li>Doki Doki Literature Club</li>
							<li>Doom (Series)</li>
							<li>Half-Life (Series)</li>
							<li>Little Inferno</li>
							<li>Metro (Series)</li>
							<li>Portal (Series)</li>
							<li>The Stanley Parable</li>
							<li>Subnautica</li>
							<li>SUPERHOT</li>
							<li>Transistor</li>
							<li>Team Fortress 2</li>
							<li>Universal Paperclips</li>
						</ul>
					</VideoGames>
				</div>
			</div></div>
		</Layout>
	)
}