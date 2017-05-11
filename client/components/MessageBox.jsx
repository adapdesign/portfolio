/*
    ./client/components/Header.jsx
*/
import React from 'react';
import Words from './Words.jsx';

export default class MessageBox extends React.Component {
  render() {
  	const title = this.props.title;
  	const photoArray = (this.props.photo ? this.props.photo.split(', ') : []);
  	const body = this.props.body;
  	const id = this.props.id;
    return (
	<div className="message-box-container" id={id}>
		<div className="message-box">
			<div className="message-box-text">
				<div className="message-box-img clearfix">
					{photoArray.map((item, index) => {
		let classNameValue = (index === 0 ? 'main' : 'sub');
		return <img src={item} className={classNameValue} />;
	})}
				</div>
				{body}
			</div>
		</div>
		<div className="message-box-title">{title}</div>
	</div>);
  }
}