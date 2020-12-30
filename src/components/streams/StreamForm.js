import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {
	// This is what will be rendered to the field
	renderInput({ input, label, placeholder, meta }) {
		//console.log(meta);
		const className = `field ${meta.touched && meta.error ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} placeholder={placeholder} autoComplete='off' />
				{meta.touched && meta.error ? (
					<div className='ui error message'>
						<div className='header'>Error: {meta.error}</div>
					</div>
				) : null}
			</div>
		);
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
    		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className='ui form error'>
				<Field
					name='title'
					component={this.renderInput}
					label='Enter Title'
					placeholder='Enter a title for your stream'
				/>
				<Field
					name='description'
					component={this.renderInput}
					label='Enter Description'
					placeholder='Tell us what it is all about...'
				/>
				<button className='ui button primary'>Submit</button>
			</form>
		);
	}
}
// Define the validate function outside the class
const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		// only run if user doesn't enter a title
		errors.title = 'You must enter a Stream Title';
	}

	if (!formValues.description) {
		// only runs if user doesn't enter a description for stream
		errors.description = 'You must enter a Stream Description';
	}

	return errors;
};
export default reduxForm({
	form: 'streamForm',
	validate: validate,
})(StreamForm);


