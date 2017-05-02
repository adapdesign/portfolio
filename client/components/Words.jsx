/*
    ./client/components/words.jsx
*/
import React from 'react';

class Letter extends React.Component {
  render() {
  	let className = "c";
	if (this.props.highlight && this.props.highlight.split(",").indexOf(this.props.index+"") >= 0) {
		className += " highlight";
	}
	return <span className={className}>{this.props.letter}</span>;
  }
}

export default class words extends React.Component {	
	render() {
		const 
			word 		= this.props.word,
			highlight 	= this.props.highlight;

		let 
			buffer 	= [], 
			index 	= 0,
			letter;

		for (index; index < word.length; index++) {
			letter = word.charAt(index);
			buffer.push(<Letter key={index} index={index} letter={letter} highlight={highlight} />);
		};
		return (<span>{buffer}</span>);
	}
}