import React from 'react';
import Header from './shared/header/Header'
import {Container, TextField, Button } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import MovieList  from './components/movieList/MovieList'
import MovieDetails from './components/movieDetalis/MovieDetails'
import Search from './components/search/Search'
import DropDownMenu from './components/dropDownMenu/DropDownMenu'
import Images from './components/images/Images'



class App extends React.Component {
  state= {
    savedMovies: [],
    user: null,
    userName: '',
 }

 componentDidMount() {
    const savedMovies = localStorage.getItem('userData') 
    const userDetails = localStorage.getItem('userDetails')
    if(userDetails) {
      const parsedUser = JSON.parse(userDetails)
      this.setState({
        user: parsedUser
      })
    } else {
      //handle redirect log in
      }
 }

    if (savedMovies) {
      try {
        const parsed = JSON.parse(savedMovies)
        this.setState({
          savedMovies: parsed.savedMovies,
       })
      } catch (error) {
        console.log('App crashed check user input...')
      }
    }
  
    onMovieAdd = (movie) => {
      const movies = this.state.savedMovies
      movies.push(movie)

      localStorage.setItem(
        'userData', 
        JSON.stringify({
        savedMovies: movies,
    }),
    )
      this.setState({
        savedMovies: movies,
      })
    }
    handleAddUser = (event) => {
      localStorage.setItem(
        'userDetails', 
        JSON.stringify({
        userName: this.state.userName
      })
      )
      this.setState({
        user: {
          userName: this.state.userName
        },
        userName: null
      })
    }

    onUserChange= (event) => {
      const { value } = event.target
       this.setState({
         userName: value
       })
    }

    changeRating = (rating, movieId) => {
      const foundIndex = this.state.savedMovies.findIndex(
        (item) => item.id === movieId,
        )
      const { savedMovies } = this.state
      const movie = savedMovies[foundIndex]
      savedMovies[foundIndex] = Object.assign({}, movie, {userRating: rating})
      this.setState({
          savedMovies: savedMovies
      })
      localStorage.setItem(
        'userData', 
        JSON.stringify({
          savedMovies: savedMovies,
        }),
      )

      console.log(this.state.savedMovies[foundIndex])
   // arr[index] = newValue
  
  console.log(Object.assign({}, movie, { userRating: rating}))
    }

    logout = () => {
      this.setState({user: null})
      localStorage.removeItem('userDetails')
    }



  render() {
    const {savedMovies, user} = this.state
  return (
    
    <Router>
      <DropDownMenu />
     <div className="App">
      <Header user={user} onLogout={this.logout} />
        {user ? (
         <Switch>
          <Route path="/" exact>
           <React.Fragment>
             <Container maxWidth="md">
               <Search onMovieAdd={this.onMovieAdd} />
            </Container>
          <Container maxWidth="md">
        <MovieList 
          savedMovies={savedMovies}
          changeRating={this.changeRating}
           />
         </Container>
       </React.Fragment>
       </Route>
     <Route path="/settings">
     Hello {user.userName}
     </Route>
     <Route path="/details/:id">
       <MovieDetails />
     </Route>
     <Route path="*">
     Page not found. Try again!
     </Route>
   </Switch>
 ) : (
    <Container maxWidth="md">
      <h2>Hello stranger!</h2>
        <h4>What is your name?</h4>
        <TextField label="Name" onChange={this.onUserChange} />
        <Button variant="contained" onClick={this.handleAddUser}>
          Save
          </Button>
        </Container>
        
        )}
    </div>
    </Router>
    )
  }
}

  

export default App;
