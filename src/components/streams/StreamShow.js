import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		if (!this.props.showedStream) {
			return <div>Loading</div>;
		} else {
			const {title, description} = this.props.showedStream;
			return (
				<div>
					<h1>{title}</h1>
					<h5>{description}</h5>
				</div>
			);
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		showedStream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, {
	fetchStream,
})(StreamShow);
