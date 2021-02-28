/*
    ./client/components/Menu.jsx
*/
import React from 'react';
import Words from './Words.jsx';

export default class Menu extends React.Component {
  render() {
    return (
	<ul className="menu">
		<a href="#profile">
			<li><Words word="PROFILE" highlight="2,4,6" /></li>
		</a>
		<a href="#portfolio">
			<li><Words word="PORTFOLIO" highlight="1,4,8" /></li>
		</a>
		<a href="#experience">
			<li><Words word="EXPERIENCE" highlight="2" /></li>
		</a>
		<a href="#contact">
			<li><Words word="CONTACT" highlight="1,4" /></li>
		</a>
		<a href="#website">
			<li><Words word="WEBSITE" highlight="2" /></li>
		</a>
	</ul>);
  }
}