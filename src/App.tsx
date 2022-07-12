import React from 'react';
import { Topbar } from '@containers';
// STYLE
import './App.scss';

const App = (): JSX.Element => {
	return (
		<div className="App">
			<Topbar id="app-topbar" />
		</div>
	);
};

export default App;
