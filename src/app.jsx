import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ FileInput, authService, cardRepository }) {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Login authService={authService}></Login>
					</Route>
					<Route exact path='/maker'>
						<Maker
							cardRepository={cardRepository}
							FileInput={FileInput}
							authService={authService}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
