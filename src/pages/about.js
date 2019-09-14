import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import me from '../images/me.jpg'
import glados from '../images/glados.gif'
import sound from '../images/garbage.mp3'
import bg from '../images/bg.gif'

const Layout = styled.div`
	background: url(${bg}) repeat;
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

const Name = styled.h1`
	margin: 0 0 0 -6px;
	line-height: 100%;
	font-size: 6.8rem;
	color: transparent;
	background: url(${bg}) repeat;
	background-clip: text;
	-webkit-background-clip: text;
	background-size: 12rem;
`

const Perspective = styled.ul`
	list-style: none;
	margin-top: 3.5rem;

	li {
		display: flex;
		height: 7rem;
		margin-top: -4.5rem;

		div {
			width: 50%;
			overflow: hidden;

			h2 {
				width: 200%;
				text-align: center;
				font-weight: 300;
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
			}
		}
	}
`

const Bio = styled.div`
	text-align: center;
	margin-bottom: 2rem;

	span {
		font-weight: 700;
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

const Interests = styled.h4`
	overflow: hidden;
	height: 32px;
	max-width: 30.5rem;


	@media (max-width: 550px){
		display: none;
	}

	div {
		animation: Scroll 10s ease-in-out infinite;
		float: right;
		font-weight: 300;

		@keyframes Scroll {
			0%, 20% { transform: translateY(0px); }
			25%, 45%  { transform: translateY(-36px); }
			50%, 70%  { transform: translateY(-72px); }
			75%, 95% { transform: translateY(-108px); }
			100% { transform: translateY(-140px); }
		}

		span, h4 {
			display: block;
			font-size: 1.5rem; 
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

	h3, h5 { margin: 0; }

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

	a, .glados { opacity: 1; margin: 0 auto; }

	img {
		width: 11.391rem;
		margin: 0;
		transition: all 200ms ease-in-out;

		&:hover:not(.glados) {
			transform: scale(1.1);
		}
	}
`

export default function AboutPage(){
	const[x, setX] = useState(0)
	const GLaDOS = (typeof Audio === `undefined`) ? 0 : new Audio(sound);
	return(
		<Layout onMouseMove={(e) => setX(e.pageX - ((typeof window === `undefined`) ? 0 : (window.innerWidth/2)))}>
			<Helmet title='About Me'/>
			<div className='container'><div className='wrapper'>
				<img style={{maxWidth: '100%', borderRadius: '100%', marginTop: '3rem'}} src={me} alt='Harsh Baid' />
				<div>
					<h4 style={{margin: 0}}>Hi, I'm</h4>
					<Name>Harsh Baid</Name>
				</div>
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
					<h3 style={{fontWeight: 300}}>I'm a <span>Software Engineer</span> w/ a passion for</h3>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<h4 className='blur'>Front-End Development</h4>
						<h4 className='color'>Design / Color Theory</h4>
						<h4 className='security'>Cyber Security</h4>
					</div>
				</Bio>
				<div style={{textAlign: 'left', maxWidth: '1000px', margin: '2rem 1rem 0'}}>
					<hr />
					<Interests>In my free time, I like to <div>
						<span>play my ukulele</span>
						<span>sing</span>
						<span>tinker with electronics</span>
						<span>take long naps</span>
					</div></Interests>
					<VideoGames>
						<h3 style={{lineHeight: '100%'}}>I <Heart /> Video Games!</h3>
						<h5>(these are some of my favorites)</h5>
						<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/420'><img alt='Half Life 2' src='https://steamcdn-a.akamaihd.net/steam/apps/420/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/440'><img alt='TF2' src='https://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/107100'><img alt='Bastion' src='https://steamcdn-a.akamaihd.net/steam/apps/107100/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/17410'><img alt='Mirror Edge' src='https://steamcdn-a.akamaihd.net/steam/apps/17410/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/237930'><img alt='Transistor' src='https://steamcdn-a.akamaihd.net/steam/apps/237930/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/8870'><img alt='Bioshock Infinite' src='https://steamcdn-a.akamaihd.net/steam/apps/8870/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/620'><img alt='Portal 1' src='https://steamcdn-a.akamaihd.net/steam/apps/620/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/219890'><img alt='AntiChamber' src='https://steamcdn-a.akamaihd.net/steam/apps/219890/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/50300'><img alt='Spec Ops: The Line' src='https://steamcdn-a.akamaihd.net/steam/apps/50300/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/274310'><img alt='Always Sometimes Monsters' src='https://steamcdn-a.akamaihd.net/steam/apps/274310/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/286690'><img alt='Metro 2033' src='https://steamcdn-a.akamaihd.net/steam/apps/286690/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/26800'><img alt='Braid' src='https://steamcdn-a.akamaihd.net/steam/apps/26800/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/470260'><img alt='Event[0]' src='https://steamcdn-a.akamaihd.net/steam/apps/470260/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/698780'><img alt='Doki Doki Literature Club' src='https://steamcdn-a.akamaihd.net/steam/apps/698780/header.jpg' /></a>
							<a target='_blank' rel='noopener noreferrer' href='https://store.steampowered.com/app/379720'><img alt='Doom' src='https://steamcdn-a.akamaihd.net/steam/apps/379720/header.jpg' /></a>
							<img className='glados' src={glados} alt='Glados' onClick={() => GLaDOS.play()} />
						</div>
					</VideoGames>
				</div>
			</div></div>
		</Layout>
	)
}