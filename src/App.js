import React from 'react';
import Navigation from './Components/Navigation';
import HomePage from './Components/HomePage';
import MoviesPage from './Components/MoviesPage';
import {Route,Switch} from 'react-router-dom'

const App=()=>(<>
    <Navigation/>
    <Switch>
    <Route path="/" exact>
        <HomePage/>
    </Route>
    <Route path="/movies">
        <MoviesPage/>
    </Route>
    </Switch>
    
    </>

)
export default App;