//import React from 'react';
// class SearchBar extends React.Component {

import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ' ' };
    }
    render() {

        return (
            //  <input  onChange={onInputChanged} />
            // <input  onChange={event => console.log(event.target.value)} />
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value })} />

            </div>
        );
    }

    // onInputChanged(event) {
    //     event.preventDefault();
    //     console.log(event.target.value);
    // }

}

export default SearchBar;