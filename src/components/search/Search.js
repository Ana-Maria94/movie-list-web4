import React, { Component } from 'react'
import {TextField, Button, Container} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import ResultsList from './ResultsList'; 

import styles from './Search.module.css';
import Settings, {API_URL, API_KEY}from '../../config/Settings'
import axios from 'axios';

class Search extends Component  {

state = {
    searchResults: [],
    searchTerm: ''
}

handleSearch = async () => {
    console.log(this.state.searchTerm)
    const { API_URL, API_KEY } = Settings;
    const url =  `${API_URL}/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`
   
    const saveMovies = (response) => {
        this.setState({
            searchResults: response.data.results,
        })
    }

    const logError = (error) => console.log(error)

   axios.get(url).then(saveMovies).catch(logError)

    const result = await axios.get(url)
    saveMovies(result)

   
   /* const myPromise = (param) => new Promise((resolve, reject) => {
        if (param === 1) {
            resolve('ok')
        } else {
            reject('Number is incorrect')
        }
    })
    myPromise(2).then((result) => console.log(result)).catch(err => console.log(err))  */
}

handleChange = (event) => {
    this.setState({
        searchTerm: event.target.value
    })
}

handleAdd = (movie) => {
    this.setState({
        searchResults: [],
        searchTerm: ''
    })
    this.props.onMovieAdd(movie)
}

handleKeyPress = (event) => {
    console.log(
    'KeyCode: ${event.charCode} | Key: ${event.key} (Alt: ${event.altKey}, Ctrl: ${event.ctrlKey})'
    )
    if ( event.key === 'Enter') {
        this.handleSearch()
    }
}
    render() {  
     return (
<React.Fragment>
<Container className={styles.container}>
<TextField 
placeholder="Type the name of a movie..." 
label="Search" 
variant="outlined"  
className={styles.search}
value = {this.state.searchTerm}
onChange={this.handleChange}
onKeyPress={this.handleSearch}
/>
<Button 
className="carousel"
variant="outlined" 
startIcon={<SearchIcon />} 
onClick={this.handleSearch}>
    Search
</Button>
</Container>
{ this.state.searchResults.length > 0 && (
<Container className={styles.results}>
    <ResultsList movies={this.state.searchResults} onAdd={this.handleAdd} />
</Container>
)}
</React.Fragment>
    )
}
} 
export default Search;