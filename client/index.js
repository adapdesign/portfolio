/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import MessageBox from './components/MessageBox.jsx';
import Words from './components/Words.jsx';

require('./styles/animation.scss');
require('./styles/app.scss');

const aboutTitle = <div><Words word="About" highlight="1" /> <Words word="Me" /></div>;
const profileTitle = <Words word="Profile" highlight="0" />;
const portfolioTitle = <Words word="Portfolio" highlight="8" />;
const contactTitle = <Words word="Contact" highlight="1" />;

const aboutBody = <p>This is a little section my biography, it will tell you about my past, personality, and hopes and aspirations.</p>;
const profileBody = <p>I am currently working as a Front End Developer, learning and mastering frameworks (YUI, Sencha Touch, AngularJS, JQuery, NodeJS), and dipped my toes into Hybrid Mobile Applications.</p>;
const portfolioBody = <div>
						<p><a href="http://swd.htpwebdesign.ca/" target="_blank">BCIT SWD Website (Web Design Program)</a></p>
						<p><a href="https://www.rbauction.com/" target="_blank">Ritchie Bros. Website (Responsive Design)</a></p>
						<p>Ritchie Bros. Bidding App (Hybird) <a href="https://play.google.com/store/apps/details?id=com.rbauction.RitchieBros&hl=en" target="_blank">[Android]</a> <a href="https://itunes.apple.com/ca/app/ritchie-bros/id1068567213?mt=8" target="_blank">[iOS]</a></p>
					</div>;
const contactBody = <p>You can reach me by <a href="mailto:adapdesigns@gmail.com">adapdesigns[at]gmail.com</a></p>;


ReactDOM.render(<div className="content">
	<Header />
	<Menu />
	<div className="message-box-collection">
		<MessageBox id="about" title={aboutTitle} body={aboutBody} />
		<MessageBox id="profile" title={profileTitle} body={profileBody} />
		<MessageBox id="portfolio" title={portfolioTitle} body={portfolioBody} />	
		<MessageBox id="contact" title={contactTitle} body={contactBody} />	
	</div>
</div>, document.getElementById('root'));