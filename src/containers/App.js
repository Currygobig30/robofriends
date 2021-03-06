import React, { Component } from 'react';
import CardList from '../components/CardList'
// import { friends } from './friends_list.js'
import SearchBox from '../components/SearchBox';
import './App.css';
import ScrollBox from '../components/ScrollBox';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
    constructor() {
        super()
        this.state = {
            wholelist: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json();})
        .then(users => {this.setState({ wholelist: users })});
    }

    // when define our own function, use the arrow function to avoid error when using "this" keyword
    searchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { wholelist, searchfield } = this.state;
        const filteredFriends = wholelist.filter(friend => {
            return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (!wholelist.length) ? <h2>Loading</h2> : (
            <div className="tc">
                <h1>RoboFriends</h1>
                <div className="search_box">
                    <SearchBox searchChange={this.searchChange} />
                </div>
                <ScrollBox>
                    <ErrorBoundary>
                        <CardList wholelist={filteredFriends} />
                    </ErrorBoundary>
                </ScrollBox>
            </div>
        )
    }
}

export default App;