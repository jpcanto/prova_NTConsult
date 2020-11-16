import React, { useEffect, useState } from 'react';
import { Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import { Navbar } from './components/styled/Navbar/Navbar';

import Main from './views/Main/Main';
import Characters from './views/Characters/Characters.tsx';
import Films from './views/Films/Films.tsx';
import NotFound from './views/NotFound/NotFound.tsx';
import history from './history';

import starWarsLogo from './assets/img/Star_Wars_logo.png';

const Routes = () => {

    const [scroll, setScroll] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY));
    }, []);
    return <>
        <Router history={history} forceRefresh={true}>
            <Navbar image={starWarsLogo}
                scrolled={scroll > 0 ? true : false}
            >
                <Link to="/" className={!scroll > 0 ? 'scrolled' : ''}></Link>
                <Link to="/films" className={!scroll > 0 ? 'scrolled' : ''}>Films</Link>
                <Link to="/characters" className={!scroll > 0 ? 'scrolled' : ''}>Characters</Link>
            </Navbar>
            <Switch>
                <Route exact path='/' render={() => <Main />} />
                <Route exact path='/films' render={() => <Films />} />
                <Route exact path='/characters' render={() => <Characters />} />
                <Route path='/404' render={() => <NotFound />} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    </>
}

export default Routes;