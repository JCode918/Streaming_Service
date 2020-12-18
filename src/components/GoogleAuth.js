import React from 'react';

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };
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
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}
	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
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
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
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

export default GoogleAuth;
