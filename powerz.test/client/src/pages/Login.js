import { useState } from 'react'
import history from '../history';



function App() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState('')


	

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			localStorage.setItem('user', JSON.stringify(email))
			let userDetails = JSON.parse(localStorage.getItem('user'));
			setUser(userDetails.value)
			history.push('/Home')
			alert('Login successful as ' +userDetails);
		} else {
			alert('Please check your username and password')
		}
	}



	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}



export default App
