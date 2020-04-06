import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './Index/Index';
import Call from './Call/Call';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Index />
				</Route>
				<Route path="/:id">
					<Call />
				</Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
