import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'; // The action is what does the work

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderList() {
		return this.props.allStreams.map((stream) => {
			return (
				<div className='item' key={stream.id}>
					<i className='large video middle aligned icon'></i>
					<div className='content'>
						<a className='header' href='/#'>
							{stream.title}
						</a>
						<div className='description'>{stream.description}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className='ui relaxed divided list'>{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		allStreams: Object.values(state.streams), // Method of turning an object into an Array
	};
};
export default connect(mapStateToProps, {
	fetchStreams,
})(StreamList);
