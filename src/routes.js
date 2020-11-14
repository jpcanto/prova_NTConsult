import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Navbar } from './components/styled/Navbar';

import Main from './views/Main/Main';
import Characters from './views/Characters/Characters.tsx';
import Films from './views/Films/Films.tsx';
import Planets from './views/Planets/Planets.tsx';
import history from './history';

import starWarsLogo from './assets/img/Star_Wars_logo.png';

const Routes = () => {

    return <>
        <Router history={history} forceRefresh={true}>
            <Navbar image={starWarsLogo}>
                <Link to="/"></Link>
                <Link to="/films">Films</Link>
                <Link to="/characters">Characters</Link>
                <Link to="/planets">Planets</Link>
            </Navbar>
            <Switch>
                <Route exact path='/' render={() => <Main requestType="films" />} />
                <Route exact path='/films' component={Films} />
                <Route exact path='/characters' component={Characters} />
                <Route exact path='/planets' component={Planets} />
            </Switch>
        </Router>
    </>
}

export default Routes;