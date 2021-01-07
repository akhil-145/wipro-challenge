import React, { Suspense } from 'react';
import axios from 'axios';

import SearchBox from './Components/SearchBox';
const SearchResult = React.lazy(() => import('./Components/SearchResult'));
class App extends React.Component {

  state = {keywords: [], searchResult: {}};
  userName = "145akhil";
  buttonClicked = false;

  searchCountry = (term) => {
    if(this.buttonClicked) {
      return;
    }
    this.buttonClicked = true;
    let tempArray = [...this.state.keywords];
    let searchResult = {};
    tempArray.push(term)
    if(tempArray.length > 5) {
      tempArray.shift();
    }
    axios.get(`http://api.geonames.org/countryInfoJSON?username=${this.userName}&country=${term}`).then(response => { 
    if(response?.data?.geonames.length == 1) {
      searchResult = response.data.geonames[0];
      this.buttonClicked = false;
      this.setState({keywords: tempArray, searchResult: searchResult});
    }
    })
    this.setState({keywords: tempArray, searchResult: searchResult});
  }

  render() {
    return (
      <div className="app">
        <SearchBox handler={this.searchCountry}></SearchBox>
        <Suspense fallback={<div className="info-text">Loading...</div>}><SearchResult searchResult={this.state.searchResult}></SearchResult></Suspense>
        </div>
    );
  }
}

export default App;
