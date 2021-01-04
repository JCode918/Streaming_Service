import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions'; // The action is what does the work

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	// This is the logic for showing edit and delete for streams for a logged in user
	renderAdmin(stream) {
		if (stream.userId === this.props.currentUser) {
			return (
				<div className='right floated ui buttons content'>
					<Link
						to={`/streams/edit/${stream.id}`}
						className='ui animated fade button'>
						<div className='visible content'>Edit</div>
						<div className='hidden content'>
							<i className='large edit icon'></i>
						</div>
					</Link>
					<div className='or'></div>
					<Link
						to={`/streams/delete/${stream.id}`}
						className='ui animated fade negative button'>
						<div className='visible content'>Delete</div>
						<div className='hidden content'>
							<i className='large trash alternative icon'></i>
						</div>
					</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.allStreams.map((stream) => {
			return (
				<div className='item' key={stream.id}>
					{this.renderAdmin(stream)}
					<i className='large video middle aligned icon'></i>
					<div className='content'>
						<Link className='header' to={`/streams/${stream.id}`}>
							{stream.title}
						</Link>
						<div className='description'>{stream.description}</div>
					</div>
				</div>
			);
		});
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to='/streams/new' className='ui primary button'>
						Create Stream
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className='ui celled list'>{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		allStreams: Object.values(state.streams), // Method of turning an object into an Array
		currentUser: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};
export default connect(mapStateToProps, {
	fetchStreams,
})(StreamList);
