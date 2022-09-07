import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import history from './history';




const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Router history={history}>
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
                	<Route path="/Home" exact component={Home} />
				</Router>
			</BrowserRouter>
		</div>
	)
}

export default App
