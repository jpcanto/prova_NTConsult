import React, { useEffect, useState } from 'react';
import { Router, Switch, Link, Route } from 'react-router-dom';
import { Navbar } from './components/styled/Navbar';

import Main from './views/Main/Main';
import Characters from './views/Characters/Characters.tsx';
import Films from './views/Films/Films.tsx';
import Planets from './views/Planets/Planets.tsx';
import history from './history';

import starWarsLogo from './assets/img/Star_Wars_logo.png';

const Routes = () => {

    const [scroll, setScroll] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY));
    }, []);
    console.log(scroll > 0 ? true : false)
    return <>
        <Router history={history} forceRefresh={true}>
            <Navbar image={starWarsLogo}
                scrolled={scroll > 0 ? true : false}
            >
                <Link to="/"></Link>
                <Link to="/films">Films</Link>
                <Link to="/characters">Characters</Link>
                <Link to="/planets">Planets</Link>
            </Navbar>
            <Switch>
                <Route exact path='/' render={() => <Main requestType="main" />} />
                <Route exact path='/films' render={() => <Films requestType="films" />} />
                <Route exact path='/characters' render={() => <Characters requestType="characters" />} />
                <Route exact path='/planets' render={() => <Planets requestType="planets" />} />
            </Switch>
        </Router>
    </>
}

export default Routes;