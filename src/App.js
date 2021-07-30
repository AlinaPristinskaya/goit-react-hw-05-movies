import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage';
import MoviesPage from './Components/MoviesPage';
import {Route,Switch} from 'react-router-dom';
import MovieDetailsPage from './Components/MovieDetailsPage';



const App=()=>(<>
    <ToastContainer autoClose={3000} />
    <Navigation/>
    <Switch>
    <Route path="/" exact>
        <HomePage/>
    </Route>
    <Route path="/movies" exact>
        <MoviesPage/>
    </Route>
    <Route path='/movies/:moviesId'>
        <MovieDetailsPage/>
    </Route>
    

    </Switch>
    
    </>

)
export default App;