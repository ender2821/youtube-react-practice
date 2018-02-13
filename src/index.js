import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search-bar.js';

const API_KEY = 'AIzaSyDvEHmgS_GO-OLGj8qEqq-XbOs4T3ZFxdQ';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDom.render(<App />, document.querySelector('.container'))