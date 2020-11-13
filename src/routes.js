import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Navbar } from './components/styled/Navbar';

import Main from './views/Main/Main';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';
import Planets from './views/Planets/Planets';

const Routes = () => {

    return <>
        <Router>
            <Navbar>
                <Link to="/">Home</Link>
                <Link to="/films">Films</Link>
                <Link to="/characters">Characters</Link>
                <Link to="/planets">Planets</Link>
            </Navbar>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/films' component={Films} />
                <Route exact path='/characters' component={Characters} />
                <Route exact path='/planets' component={Planets} />
            </Switch>
        </Router>
    </>
}

export default Routes;