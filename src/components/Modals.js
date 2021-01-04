import React from 'react';
import ReactDOM from 'react-dom';


const Modal = (props) => {
	return ReactDOM.createPortal(
		<div
			onClick={props.onDismiss}
			className='ui dimmer modals visible active'>
			<div
				onClick={(e) => e.stopPropagation()}
				className='ui standard modal visible active'>
				{' '}
				{/*Adding an onClick event to stop the closing of the modal on errant click. When a user clicks the background of a Modal it will usually close, however because of event handling propagation (research term) if a click is made within the modal for example not on the button but near the button it will close the entire modal. We don't want that to happen so we add this extra on click to stop that from happening.  */}
				<div className='header'>{props.title}</div>
				<div className='content'>
					{props.content}
				</div>
				<div className='actions'>
					{props.actions}
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
