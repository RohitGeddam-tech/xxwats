import React from 'react';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Routing = () => {
    return(
        <Router>
            <div className='App'>
                <Switch>
                    <Route path='/' exact component={App}/>
                    <Route path='/xxwatts' exact component={App}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Routing;