import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
//import logo from '/home/jcode918/Development/ReactJs/Modern_React_Redux/Redux_Projects/RR_Project3/streams/client/public/logo192.png'

const Header = () => {
	return (
		<div className='ui pointing menu'>
			<Link to='/' className=' active item'>
				Streamer
			</Link>
			<div className='right menu'>
				<Link to='/' className='item'>
					All Streams
				</Link>
			</div>
			<GoogleAuth />
		</div>
	);
};

export default Header;
