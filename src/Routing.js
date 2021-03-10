import React from 'react';
import App from './App';
import about from './about/AboutPage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Routing = () => {
    return(
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/xxwats' exact component={App}/>
                    <Route path='/xxwats/about' exact component={about}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routing;