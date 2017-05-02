/*
    ./client/components/Header.jsx
*/
import React from 'react';
import Word from './Words.jsx';

export default class Header extends React.Component {
  render() {
    return (
	<div>
		<div className="bars"></div>
		<div className="bars small"></div>
		<h3>
			<Word word="ADAPDESIGNS" highlight="4" />
		</h3>
	</div>);
  }
}