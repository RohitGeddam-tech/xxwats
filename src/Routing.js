import React from 'react';
import App from './App';
import about from './about/AboutPage'
import contact from './Contacts'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Routing = () => {
    return(
        <Router>
            <>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/xxwats' exact component={App}/>
                    <Route path='/xxwats/about' exact component={about}/>
                    <Route path='/xxwats/contact' exact component={contact}/>
                </Switch>
            </>
        </Router>
    )
}

export default Routing;