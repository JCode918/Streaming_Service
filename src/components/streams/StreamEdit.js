import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.stream) {
			return (
				<div className='ui segment'>
					<div className='ui active inverted dimmer'>
						<div className='ui text loader'>Loading</div>
					</div>
					<h1>{/* */}</h1>
					<p>Is this really a stream...</p>
				</div>
			);
		}
		//const { title, description } = this.props.stream;
		return (
			<div>
				<h3>Edit Stream {this.props.stream.id}</h3>
				<StreamForm
					onSubmit={this.onSubmit}
					initialValues={_.pick(this.props.stream, 'title', 'description')}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	// ownProps is the props that belong to component above
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};
export default connect(mapStateToProps, {
	fetchStream,
	editStream,
})(StreamEdit);
