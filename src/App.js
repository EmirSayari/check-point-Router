import React from 'react';
import Navbar from './components/Navbar';
import Filter from './components/filter';
import MovieList from './components/MovieList';
import Add from './components/Add';
import {movies} from './components/Movies';
import './App.css';
import {useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import Details from "./components/Details"


function App() {

const [movieList, setmovieList]= useState(movies)

 console.log(movieList);
  return (



    <div className="App">
      <div>
       
        <Navbar />
         <Filter />
         <Add />

<Switch>


  <Route exact path="/" > <MovieList movieList={movieList} /> </Route>
  <Route path="/details/:id" render={   (props) => <Details   {... props} list={movies}  />} /> 

</Switch>

  


      
             
      </div>
    </div>
  );
}

export default App;