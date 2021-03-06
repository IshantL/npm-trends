import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

require('datejs');

import configureStore from '../store/appStore';

import AppContainer from '../containers/AppContainer';

const onUpdate = () => {
  // Track in Google Analytics
  ga('send', 'pageview', window.location.pathname);
  return null;
};

const AppClient = (props, railsContext) => {

  return (
    <Provider store={configureStore(props, railsContext)}>
    	<Router history={history}>
    		<div>
          <Route component={onUpdate} />
	      	<Route exact path="/" component={AppContainer} />
			    <Route path="/:packets+" component={AppContainer}/>
			  </div>
      </Router>
    </Provider>
  );
};

export default AppClient;