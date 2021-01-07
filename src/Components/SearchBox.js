import React from 'react';

class SearchBox extends React.Component{
    state = {keyword: ""}

    handleClick(event) {
        this.props.handler(this.state.keyword)
    }

    render() {
        return(
            <div className="search-box">
                <div className="search-form">
                <label for="search" className="search-label">Country Code</label>
                <input id="search" className="search-field" placeholder="Please provide valid country code" value={this.state.keyword} onChange={ event =>this.setState({keyword: event.target.value})}></input>
                </div>
                <button className="button" onClick={(event) => this.handleClick(event)} >Submit</button>
            </div>
        );
    }
}

export default SearchBox;