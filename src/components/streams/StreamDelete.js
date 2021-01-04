import React from 'react';
import Modal from '../Modals';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchStream(this.props.match.params.id);
	}

	// This will render the buttons of the modal
	renderActions() {
		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteStream(this.props.match.params.id)}
					className='ui button negative'>
					Delete
				</button>
				<button onClick={() => history.push('/')} className='ui button'>
					Cancel
				</button>
			</React.Fragment>
		);
	}

	// This will render the content of the modal
	renderContent() {
		if (!this.props.streamToDelete) {
			return 'Are you sure you want to delete this stream?';
		}

		return `Are you sure you want to delete the stream entitled: "${this.props.streamToDelete.title}"?`;
	}

	renderTitle() {
		if (!this.props.streamToDelete) {
			return 'Delete Stream';
		}

		return `Delete Stream ID: ${this.props.streamToDelete.id}`;
	}

	render() {
		return (
			<Modal
				title={this.renderTitle()}
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		streamToDelete: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, {
	fetchStream,
	deleteStream,
})(StreamDelete);
