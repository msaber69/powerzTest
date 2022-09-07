
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const bcrypt = require('bcryptjs')


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/internsdb')

app.get('/api/allfavs', async (req, res) => {
    const user = await User.findOne({
		isActive: true,
	})
	res.json(user.Favlist)
	console.log(user.Favlist)
	return user.Favlist;
})

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
			isActive: false,
			Favlist: [],
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const activeuser = await User.findOne({
			isActive: true,
		})
		if (activeuser) {
			return res.json({ status: 'error : There is an already active user', })
		}
		else {
			await user.updateOne({
				isActive : true,
			});
		}
		
		return res.json({ status: 'ok'})
        
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.post('/api/logout', async (req, res) => {
	const user = await User.findOne({
		isActive: true,
	})


	await user.updateOne({
		isActive : false,
	});
	return res.json({ status: 'ok'})
})


app.post('/api/addFav', async (req, res) => {
	console.log(req.body)
	const user = await User.findOne({
		isActive: true,
	})


	await User.findOneAndUpdate(
		{ isActive: true },
   		{ $push: { Favlist: req.body.Fav } },
	);
	return res.json({ status: 'ok'})
	
})





app.listen(1337, () => {
	console.log('Server started on 1337')
})
