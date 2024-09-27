import React from 'react';
import '../styles/Header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<a href="#landing-page">Rohit</a>
			</div>
			<nav className="nav">
				<ul>
					<li>
						<a href="#about">About</a>
						<div className="glowing-lines">
							<a href="#about" className="line red" aria-label="About section"></a>
						</div>
					</li>
					<li>
						<a href="#projects">Projects</a>
						<div className="glowing-lines">
							<a href="#projects" className="line yellow" aria-label="Projects section"></a>
						</div>
					</li>
					<li>
						<a href="#contact">Contact</a>
						<div className="glowing-lines">
							<a href="#contact" className="line green" aria-label="Contact section"></a>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;