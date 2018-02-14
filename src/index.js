import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.js';
import VideoList from './components/video-list.js';
import VideoDetail from './components/video-detail.js';
const API_KEY = 'AIzaSyDvEHmgS_GO-OLGj8qEqq-XbOs4T3ZFxdQ';



class App extends Component{
	constructor(props){
		super(props)
		this.state = { videos: [] };
		
		YTSearch({key: API_KEY, term: 'ducati'}, (videos) => {
			this.setState({videos});
			// this.setState({viedos: videos}); This ES6 resovesto this 
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'))