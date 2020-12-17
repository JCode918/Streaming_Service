import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
	return (
		<div>
			Welcome to Page One
			<Link className='ui button' to='/pagetwo'>
				Page Two
			</Link>
		</div>
	);
};

const PageTwo = () => {
	return (
		<div>
			Welcome to Page Two
			<Link className='ui primary button' to='/'>
				Page One
			</Link>
		</div>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path='/' exact component={PageOne} />
				<Route path='/pagetwo' component={PageTwo} />
			</div>
		</BrowserRouter>
	);
};

export default App;
