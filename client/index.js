/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import MessageBox from './components/MessageBox.jsx';
import Words from './components/Words.jsx';
import smoothscroll from 'smoothscroll-polyfill';

require('./styles/animation.scss');
require('./styles/app.scss');

smoothscroll.polyfill();

const aboutTitle = <div><Words word="About" highlight="1" /> <Words word="Me" /></div>;
const profileTitle = <Words word="Profile" highlight="0" />;
const portfolioTitle = <Words word="Portfolio" highlight="8" />;
const experienceTitle = <Words word="Experience" highlight="1" />;
const contactTitle = <Words word="Contact" highlight="1" />;
const webpageTitle = <Words word="Website" highlight="2" />;

const aboutBody = <p>This is a little section my biography, it will tell you about my past, personality, and hopes and aspirations.</p>;
const profileBody = <div>
			<p>I am currently working as a Android Developer, building clean and unit testable applications. My focus has been providing maintainability and extensibility when dealing with complex systems.</p>
			<ul>
				<li>Java / Kotlin</li>
				<li>OkHttp</li>
				<li>Picasso</li>
				<li>RxJava3</li>
				<li>DBFlow</li>
				<li>WebRTC</li>
			</ul>
		</div>;
const portfolioBody = <div>
						<p><a href="https://play.google.com/store/apps/details?id=ca.stalkstreet.app" target="_blank">Stalk Street Bets (Animal Crossing Compainion App)</a></p>
						<p>Ritchie Bros. Bidding App<a href="https://play.google.com/store/apps/details?id=com.rbauction.RitchieBros&hl=en" target="_blank">[Android]</a></p>
					</div>;
const experienceBody = <div>
						<p>Android Developer <span className="subtitle">(2015 - Present)</span></p>
						<p className="subtitle">Ritchie Bros. Auctioneers</p>
						<p className="subtext">Maintain app, bug and crash fixes and monitoring, performance improvements, integrating real time bidding and audio aspects, converting from Java to Kotlin.</p><br />
						<p>Front End Developer <span className="subtitle">(2012 - 2015)</span></p>
						<p className="subtitle">Ritchie Bros. Auctioneers</p>
						<p className="subtext">Updated website to responsive design, updating testing and development scripts to skip lengthy CMS build times by creating an isolated front end only environment.</p><br />
						<p>Android Developer <span className="subtitle">(2011 - 2013)</span></p>
						<p className="subtitle">Klover Development</p>
						<p className="subtext">Development of 2D Android minigames.</p><br />
						<p>Web Developer <span className="subtitle">(2008)</span></p>
						<p className="subtitle">Navarik</p>
						<p className="subtext">Developed MVC code architecture and front end designs for Navarik's Web Application, a web-based platform for shipping companies.</p>
					</div>;
const contactBody = <p>You can reach me by <a href="mailto:adapdesigns@gmail.com">adapdesigns[at]gmail.com</a></p>;
const webpageBody = <p>This webpage designed was inspired by the aesthetics of JRPG Persona 5. It was developed using React.</p>;


ReactDOM.render(<div className="content">
	<Header />
	<Menu />
	<div className="message-box-collection">
		<MessageBox id="about" title={aboutTitle} body={aboutBody} />
		<MessageBox id="profile" title={profileTitle} body={profileBody} />
		<MessageBox id="portfolio" title={portfolioTitle} body={portfolioBody} />
		<MessageBox id="experience" title={experienceTitle} body={experienceBody} />
		<MessageBox id="contact" title={contactTitle} body={contactBody} />
		<MessageBox id="website" title={webpageTitle} body={webpageBody} />	
	</div>
</div>, document.getElementById('root'));