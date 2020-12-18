import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'986076399965-gbig284h8vd5ugs2at6n93hr528r1b3b.apps.googleusercontent.com',
					scope: 'email',
					prompt: 'select_account',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get())
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}
	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
		//this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignOutClick = () => {
		this.auth.signOut();
		//this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button className='ui red google button' onClick={this.onSignOutClick}>
					<i className='google icon' />
					Sign Out
				</button>
			);
		} else {
			return (
				<button className='ui blue google button' onClick={this.onSignInClick}>
					<i className='google icon' />
					Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

// This is the method of getting things from the store back into the component
const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
